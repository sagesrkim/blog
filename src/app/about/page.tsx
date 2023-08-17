import Profile from "@/components/Profile";
import Link from "next/link";

export default function AboutPage() {
  const TITLE_CLASS = "text-xl font-bold text-gray-800 m-2";
  return (
    <>
      <Profile />
      <section className="text-center">
        {/* <div className="flex basis-1/2 flex-row justify-center flex-grow-1"> */}
        <h2 className={TITLE_CLASS}>이름</h2>
        <p>김새롬 </p>
        {/* </div> */}
        <h2 className={TITLE_CLASS}>연락처</h2>
        <p>sagesaeromkim@gmail.com</p>
        <h2 className={TITLE_CLASS}>기술 스택</h2>
        <p>
          {" React Next.js TypeScript Redux-Toolkit"} <br />
          {"TailwindCSS JavaScript HTML5 CSS3 "}
        </p>

        <Link href="/contact">
          <button className="bg-blue-500 rounded-full px-4 py-3 mt-10 font-semibold text-xl text-white hover:bg-blue-600 hover:transition-all">
            Contact me
          </button>
        </Link>
      </section>
    </>
  );
}
