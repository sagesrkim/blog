import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/">
        <h1>{"Saerom's blog"}</h1>
      </Link>
      <nav>
        <Link href="/">home</Link>
        <Link href="about">about</Link>
        <Link href="posts">posts</Link>
      </nav>
    </header>
  );
}
