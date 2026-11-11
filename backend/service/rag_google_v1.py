from dotenv import load_dotenv
from langchain_google_genai import ChatGoogleGenerativeAI
import json
import os
from langchain_core.documents import Document  
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_chroma import Chroma
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnableLambda  # 파이프라인 조립할 때 필요한 객체
from langchain_core.output_parsers import StrOutputParser # llm응답시 문자열로 해라 객체
from huggingface_hub import snapshot_download

MODEL_PATH = "./models/ko-sroberta-multitask"
vectorstore = ''
PATH_DB='./chroma_db/menus_db'
PATH_JSON='./storage/menus_recommendation.json'

load_dotenv()  # .env 에 있는 구글 api 키를 자동으로 로딩

llm = ChatGoogleGenerativeAI(model="gemini-3.5-flash")

snapshot_download(
    repo_id="jhgan/ko-sroberta-multitask",
    local_dir=MODEL_PATH
)

embeddings = HuggingFaceEmbeddings(
    model_name="./models/ko-sroberta-multitask",
    model_kwargs={"device": "cpu"},
    encode_kwargs={"normalize_embeddings": True}
)

prompt = ChatPromptTemplate.from_template("""
[역할] 음식을 추천하고 설명하는 사장님이야
[사용자질문] {query}
[참고정보] {context}
[규칙]
- 참고정보만 참고해서 답변을 만들 것. 새로운 음식 추가하지 않는다
- 음식이름을 먼저 이야기 하고 구매 가능하도록 설명한다.
- 설명은 2줄 이하
- 아주 친절한 모드로 응답한다.
""")

rag_chain=(
    #첫번째 파이프 라인
    {
        "query":lambda x : x['uquery'],  # 만두를 바삭하게 구운 음식 소개해 줘
        "context":RunnableLambda(lambda x : format_docs(retrieval_docs(x['uquery'])))
    }
    |prompt  #두번째 파이프 라인
    |llm  #세번째 파이프 라인
    |StrOutputParser()  #네번째 파이프 라인
)

def makeChroma():
    #우리의 json 데이터 로드
    with open(PATH_JSON, "r", encoding="utf-8") as f:
        data = json.load(f)

    docs=[] # document 문서를 저장할 배열
    for row in data:
        content=f"""
        이름:{row['name']} 
        설명:{row['description']}
        """
        docmake = Document(
            page_content=content.strip()
        )
        docs.append(docmake)

    Chroma.from_documents(
        documents=docs,    # 벡터 데이터 베이스를 구축할 정보
        embedding=embeddings,  # docs의 문장을 해석하여 데이터베이스를 구축할 임베딩 객체
        persist_directory=PATH_DB # 데이터베이스 위치
    )

def loadChroma():
    if not os.path.exists(PATH_DB):
        makeChroma()
        
    print("기존 ChromaDB 불러오기")
    vectorstore = Chroma(
        persist_directory=PATH_DB,
        embedding_function=embeddings
    )

    return vectorstore
    
## 유사도가 높은 데이터를 검색해 오는 함수 정의
def retrieval_docs(query, k=3):
    vectorstore = loadChroma()    
    results = vectorstore.similarity_search(query,k=k)
    print(results)
    return results

## 보강  검색한 정보를 모델에 입력하기 위해 보강한다.
def format_docs(docs):
    data=''
    for doc_data in docs:
        data = data + "\n\n" + doc_data.page_content
    return data

def service_chat(query):
    ## 프롬프트 정의 ..-브라우저에서 llm에게 질의 하는 것 이해.. 
    result = rag_chain.invoke({'uquery':query})
    print('LLM 생성한 문장입니다.')
    print(result)
    return result

#service_chat('만두 요리 추천해 줘')