import Image from "next/image";
import profileImage from "../../public/assets/profileImage.jpg";

export default function Profile() {
  return (
    <section className="text-center mt-10">
      <Image
        className="rounded-lg mx-auto"
        src={profileImage}
        alt="profileImage"
        height={300}
        width={300}
        priority
      />
      <h3 className="text-2xl mt-2 font-semibold">Frontend Developer</h3>
    </section>
  );
}
