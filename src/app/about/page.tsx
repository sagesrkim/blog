import Profile from "@/components/Profile";


export default function AboutPage() {
  const TITLE_CLASS = "text-xl font-bold text-gray-800 m-2";
  return (
    <>
      <Profile />
      <section className="text-center mx-20">
        <h2 className={TITLE_CLASS}>이름</h2>
        <p>김새롬 </p>
        <h2 className={TITLE_CLASS}>연락처</h2>
        <a
          href="mailto:sagesaeromkim@gmail.com"
          className="hover:text-blue-900 hover:underline"
        >
          sagesaeromkim@gmail.com
        </a>
        <p></p>
        <h2 className={TITLE_CLASS}>기술 스택</h2>
        <div className="flex flex-row flex-wrap justify-center items-center ">
          <span className="mx-10">React</span>
          <span className="mx-10">Next.js</span>
          <span className="mx-10">TypeScript</span>
          <span className="mx-10">Redux-Toolkit</span>
        </div>
        <div className="flex flex-row flex-wrap justify-center items-center ">
          <span className="mx-10">TailwindCSS</span>
          <span className="mx-10">JavaScript</span>
          <span className="mx-10">HTML5</span>
          <span className="mx-10">CSS3</span>
        </div>
        <a href="mailto:sagesaeromkim@gmail.com">
          <button className="bg-blue-500 rounded-full px-4 py-3 mt-10 font-semibold text-xl text-white hover:bg-blue-600 hover:transition-all">
            Contact me
          </button>
        </a>
      </section>
    </>
  );
}
