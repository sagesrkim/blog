import { GoDotFill } from "react-icons/go";

export default function ProjectPage() {
  const DIV_CLASS = "flex flex-row mb-2";
  const SPAN_CLASS = "my-1 mr-1 text-lg text-center";
  return (
    <>
      <section className="w-full h-full p-20 bg-sky-100 flex flex-col">
        <main className="justify-center items-center">
          <div className="p-10 bg-white rounded-lg shadow-lg">
            <h3 className="text-3xl text-center font-bold mb-8">모두의 여행</h3>
            <div className="flex flex-row justify-between">
              {" "}
              <div className="w-300 h-200 m-10 bg-gray-300">
                <p>이미지 슬라이더 </p>
              </div>
              <div>
                <div className="flex flex-row mb-2">
                  <span>
                    <GoDotFill className="my-1 mr-1 text-lg text-center" />
                  </span>
                  <p>
                    국내 여행을 보다 더 편리하고 즐겁게 할 수 있는 경험을
                    제공하고자 사용자 간 여행 정보를 교환할 수 있는 커뮤니티형
                    플랫폼입니다. ‘모두의 여행’은 사용자가 키워드를 검색하여
                    여행지를 찾고 리뷰 작성 및 수정이 가능하고 직접 여행일정을
                    작성할 수 있는 서비스를 제공하고 있습니다. 다수 페이지의
                    Next.js 웹사이트를 만들면서 라우팅, CSR, SSR, SSG에 대한
                    개념을 습득할 수 있었습니다. 로그인을 다루며 OAuth 2.0의
                    개념을 정리할 수 있었고, UI & UX를 지속적으로
                    고민하며 스스로 디자인을 했습니다. 백엔드 개발자와 협업에
                    필요한 소통을 많이 배울 수 있었습니다. 필요한 API 명세를
                    문서로 작성하고 서로 공통된 지식을 함께 탐구해나가며
                    공부하였습니다.
                  </p>
                </div>
                <div className="flex flex-row mb-2">
                  <span>
                    <GoDotFill className="my-1 text-lg text-center" />
                  </span>
                  <p>프로젝트 주소: https://github.com/sagesrkim/Mohaeng</p>
                </div>
                <div className="flex flex-row mb-2">
                  <span>
                    <GoDotFill className="my-1 text-lg text-center" />
                  </span>
                  <a href="http://mohaeng.site">http://mohaeng.site</a>
                </div>
                <div className="flex flex-row mb-2">
                  <span>
                    <GoDotFill className="my-1 text-lg text-center" />
                  </span>
                  <p>개발 기간: 2023.02 ~ 2023.05</p>
                </div>
                <div className="flex flex-row mb-2">
                  <span>
                    <GoDotFill className="my-1 text-lg text-center" />
                  </span>
                  <p>
                    기술 스택: Next.js, React, TypeScript, Redux Toolkit, Styled
                    Component, Post CSS, Spring, AWS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
