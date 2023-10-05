import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <Link href="/">
        <h1 className="text-2xl font-bold">{"Saerom's Portfolio"}</h1>
      </Link>
      <nav className="flex gap-4">
        <Link className="hover:text-pink-600" href="about">
          about me
        </Link>
        <Link href="archiving" className="hover:text-pink-600">
          archiving
        </Link>
        <Link href="projects" className="hover:text-pink-600">
          projects
        </Link>
      </nav>
    </header>
  );
}
