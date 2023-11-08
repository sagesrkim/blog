import Image from "next/image";
import avatar from "../../public/assets/avatar.jpeg";

export default function Portfolio() {
  return (
    <section className="flex flex-col justify-center items-center m-10 p-20 pt-32 text-center">
      <Image
        className="text-center"
        src={avatar}
        alt="avatar"
        height={300}
        width={300}
        priority
      />
      <h2 className="text-2xl p-10 font-bold">
        사용자 경험 개선에 몰입하는 개발자 김새롬입니다
      </h2>
      <p>시행착오를 귀하게 여기는 개발자 김새롬입니다.</p>
      <p>
        1년의 프론트엔드 독학 과정을 거치고 개인 프로젝트와 팀 프로젝트 경험을
        블로그와 GitHub에 꾸준히 기록하고 있습니다.
      </p>
      <p> 적극적인 커뮤니케이션과 직관적인 UI 구현에 강점이 있습니다. </p>
      <p>
        함께 하는 가치를 알고 개발 영역의 경계를 넘나들어 꾸준히 성장하는
        개발자가 되고 싶습니다.
      </p>
    </section>
  );
}
