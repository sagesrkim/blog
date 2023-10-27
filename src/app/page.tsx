"use client";

import About from "@/components/About";
import Archiving from "@/components/Archiving";
import One from "@/components/One";
import Projects from "@/components/Projects";
import Three from "@/components/Three";
import Two from "@/components/Two";
import Link from "next/link";
import React, { useRef } from "react";

export default function Home() {
  const scrollRef = useRef<(HTMLDivElement | null)[]>([null, null, null]);

  const handleScrollView = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const name = (event.target as HTMLElement).innerText;
    const category: { [key: string]: number } = {
      About: 0,
      Archiving: 1,
      Projects: 2,
    };
    const targetElement = scrollRef.current[category[name]];

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="bg-white fixed top-0 w-full shadow-md flex justify-between items-center p-4">
        <Link href="/">
          <h1 className="text-2xl font-bold">{"Saerom's Portfolio"}</h1>
        </Link>
        <div className="flex gap-4 " onClick={handleScrollView}>
          <span>About</span>
          <span>Archiving</span>
          <span>Projects</span>
        </div>
      </div>

      <div>
        <div ref={(el) => (scrollRef.current[0] = el)}>
          <About />
        </div>
        <div ref={(el) => (scrollRef.current[1] = el)}>
          <Archiving />
        </div>
        <div ref={(el) => (scrollRef.current[2] = el)}>
          <Projects />
        </div>
      </div>
    </>
  );
}

// import { useRef } from "react";

// export default function HomePage() {
//   const element = useRef<HTMLDivElement>(null);
//   const onMoveBox = () => {
//     element.current?.scrollIntoView({ behavior: "smooth", block: "start" });
//   };
//   return (
//     <section className="text-center min-h-screen  p-16">
//       <h2 className="text-3xl font-bold mt-4 mb-20">
//         {"꾸준함과 커뮤니케이션을 높은 가치로 두는 개발자 김새롬입니다"}
//       </h2>

//       <div className="hover:pointer-events-auto" onClick={onMoveBox}>
//         테스트
//       </div>
//       <div ref={element} className="w-full h-screen relative flex flex-col">
//         안녕
//       </div>
//       <div className="mx-40 text-left">
//         꾸준함과 커뮤니케이션에 중요한 가치를 두고 있습니다. <br />
//         공부한 내용과 문제 해결 경험을 지속적으로 블로그에 작성하고 팀
//         프로젝트로 협업을 경험했습니다. <br />
//         알기 쉽고 직관적인 UI를 제공하기 위해 동적인 코드를 작성하면서, CSS에서
//         자주 사용하는 스타일과 색상을 변수화하여 중복 코드를 줄이고 심미적이고
//         깔끔한 UI를 구현하는 것을 좋아합니다. UI와 UX를 꼼꼼하게 살필 뿐만
//         아니라, 사용자의 입장에서 웹을 탐색하며 느꼈던 사소한 경험을 개선하고
//         최적화된 성능을 제공하는 개발자가 되고 싶습니다.
//       </div>
//     </section>
//   );
// }
