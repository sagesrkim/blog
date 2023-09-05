import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import velogLogo from "../../../public/assets/velogLogo.png";

export default function ArchivePage() {
  return (
    <>
      <section className="w-full h-full p-20 flex flex-row justify-center items-center space-x-0 bg-gray-100">
        <div className="h-48 flex flex-row items-center m-10 p-10 rounded-lg bg-white hover:translate-y-2 hover:duration-300 hover:cursor-pointer shadow-lg">
          <Link className="mx-4" href="https://github.com/sagesrkim" passHref>
            <BsGithub className="text-7xl" />
          </Link>
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold">GitHub</h3>
            <p>
              GitHub 저장소입니다. 주요 프로젝트와 알고리즘 문제 풀이를 기록하고
              있습니다.
            </p>
          </div>
        </div>
        <div className="h-48 flex flex-row m-10 p-10 items-center rounded-lg bg-white hover:translate-y-2 hover:duration-300 hover:cursor-pointer shadow-lg">
          <Link className="mx-4 " href="https://velog.io/@sagesrkim" passHref>
            <Image src={velogLogo} alt="velog" width={100} height={100} />
          </Link>
          <div>
            <h3 className="text-2xl font-bold ">Velog</h3>
            <p>
              React, TypeScript, Next.js를 배우고 프로젝트를 진행하며 겪었던
              경험을 기록하고 사고하는 기술 블로그입니다.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
