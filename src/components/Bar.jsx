import Link from "next/link";
import styles from "./Bar.module.scss";

function Items() {
  return (
    <ul className={styles.Items}>
      <li className={styles.Item}>
        <Link href="#about">About</Link>
      </li>
      <li className={styles.Item}>
        <Link href="#experience">
          Experience
        </Link>
      </li>
      <li className={styles.Item}>Contact</li>
    </ul>
  );
}

function Sidebar() {
  return (
    <div className={styles.Sidebar}>
      <input type="checkbox" className={styles.BurgerCheck} />
      <div className={styles.Sidebar__Burger}>
        <div className={styles.Burger} />
      </div>
      <div className={styles.Sidebar__Items}>
        <Items />
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div className={styles.Navbar}>
      <Items />
    </div>
  );
}

export default function Bar() {
  return (
    <div className={styles.Bar}>
      <div className={styles.Bar__Sidebar}>
        <Sidebar />
      </div>
      <div className={styles.Bar__Navbar}>
        <Navbar />
      </div>
    </div>
  );
}
