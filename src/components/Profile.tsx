import Image from "next/image";
import profileImage from "../../public/assets/profileImage.jpg";

export default function Profile() {
  return (
    <section>
      <Image
        src={profileImage}
        alt="profileImage"
        height={250}
        width={250}
        priority
      />
      <h2>꾸준함과 커뮤니케이션을 높은 가치로 두는 개발자 김새롬입니다 </h2>
      <h3>Frontend Developer</h3>
      <p>
        <strong>사용자 경험 개선을 위해 몰입하고 또 사유합니다</strong>
        꾸준함과 커뮤니케이션에 중요한 가치를 두고 있습니다. 공부한 내용과 문제
        해결 경험을 지속적으로 블로그에 작성하고 팀 프로젝트로 협업을
        경험했습니다. 알기 쉽고 직관적인 UI를 제공하기 위해 동적인 코드를
        작성하면서, CSS에서 자주 사용하는 스타일과 색상을 변수화하여 중복 코드를
        줄이고 심미적이고 깔끔한 UI를 구현하는 것을 좋아합니다. UI와 UX를
        꼼꼼하게 살필 뿐만 아니라, 사용자의 입장에서 웹을 탐색하며 느꼈던 사소한
        경험을 개선하고 최적화된 성능을 제공하는 개발자가 되고 싶습니다.
      </p>
    </section>
  );
}
