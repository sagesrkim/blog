import Image from "next/image";
import profileImage from "../../public/assets/profileImage.jpg";

export default function Profile() {
  return (
    <section className="text-center mt-10">
      <Image
        className="rounded-lg mx-auto mb-4"
        src={profileImage}
        alt="profileImage"
        height={350}
        width={350}
        priority
      />
      <h3 className="text-2xl mt-2 font-semibold">Frontend Developer</h3>
    </section>
  );
}
