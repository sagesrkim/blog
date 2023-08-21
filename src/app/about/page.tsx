import Profile from "@/components/Profile";

export default function AboutPage() {
  const TITLE_CLASS = "text-xl font-bold text-gray-800 m-2 flex";
  const INFO_CLASS = "m-2 text-xl";
  const SPAN_CLASS = "text-2xl font-bold mb-2";
  return (
    <>
      <Profile />
      <section className="text-center mx-20 px-20 flex flex-col justify-center items-center">
        <div className="flex">
          <h2 className={TITLE_CLASS}>이름</h2>
          <p className={INFO_CLASS}>김새롬 </p>
        </div>
        <div className="flex">
          <h2 className={TITLE_CLASS}>연락처</h2>
          <a
            href="mailto:sagesaeromkim@gmail.com"
            className={`${INFO_CLASS} hover:text-blue-900 hover:underline`}
          >
            sagesaeromkim@gmail.com
          </a>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-bold text-gray-800 m-2">기술 스택</h2>
          <div className=" flex flex-col bg-slate-100 p-10 rounded-xl drop-shadow-xl hover:translate-y-2 duration-300">
            <span className={SPAN_CLASS}>React</span>
            <span className={SPAN_CLASS}>Next.js</span>
            <span className={SPAN_CLASS}>TypeScript</span>
            <span className={SPAN_CLASS}>Redux-Toolkit</span>
            <span className={SPAN_CLASS}>TailwindCSS</span>
            <span className={SPAN_CLASS}>JavaScript</span>
            <span className={SPAN_CLASS}>HTML5</span>
            <span className={SPAN_CLASS}>CSS3</span>
          </div>
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
