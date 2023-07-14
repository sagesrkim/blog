import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <Link href="/">
        <h1 className="text-2xl font-bold">{"Saerom's blog"}</h1>
      </Link>
      <nav className="flex gap-4">
        <Link href="/">home</Link>
        <Link href="about">about</Link>
        <Link href="posts">posts</Link>
      </nav>
    </header>
  );
}
