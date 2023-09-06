/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "./Bar.module.scss";

function Items() {
  return (
    <ul className={styles.Items}>
      <div className={styles.ItemLogo}>
        <li className={styles.Item}>
          <Link href="/">
            <div className={styles.ItemImgContainer}><img className={styles.ItemImg} src="logo.png" alt="Logo" /></div>
          </Link>
        </li>
      </div>
      <div className={styles.ItemLinks}>
        <li className={styles.Item}>
          <Link href="#about">About</Link>
        </li>
        <li className={styles.Item}>
          <Link href="#experience">
            Experience
          </Link>
        </li>
        <li className={styles.Item}>
          <Link href="#contact">
            <div className={styles.ContactItemContainer}>
              <div className={styles.ContactItem}>Contact</div>
            </div>
          </Link>
        </li>
      </div>
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
