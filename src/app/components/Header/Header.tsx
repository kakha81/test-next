import Link from "next/link";
import style from "./Header.module.scss";

export default function Header() {
  return (
    <header className={style.container}>
      <Link className={style.link} href="/">
        Main Page
      </Link>
      <Link className={style.link} href="/aboutus">
        Kakha`s Page
      </Link>
      <Link className={style.link} href="/mentors">
        List of Mentors
      </Link>
    </header>
  );
}
