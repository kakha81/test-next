import Link from "next/link";
import style from "./Header.module.css";

export default function Header() {
  return (
    <header className={style.container}>
      <Link href="/">Main Page</Link>
      <Link href="/aboutus">Kakha`s Page</Link>
      <Link href="/mentors">List of Mentors</Link>
    </header>
  );
}
