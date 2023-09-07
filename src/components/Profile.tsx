import Image from "next/image";
import profileImage from "../../public/assets/profileImage.jpg";

export default function Profile() {
  return (
    <section className="text-center">
      <Image
        className="transition ease-out duration-700 rounded-lg mx-auto mb-4  hover:skew-y-3 hover:duration-700 shadow-xl"
        src={profileImage}
        alt="profileImage"
        height={350}
        width={350}
        priority
      />
    </section>
  );
}
