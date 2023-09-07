/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "./Bar.module.scss";
import Contact from "../components/Contact";
import { useState, useContext, createContext } from "react";

export const Context = createContext(false);

function Items() {

  const { isChecked, setIsChecked } = useContext(Context);

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
          <Link href="#about" onClick={() => setIsChecked(false)}>About</Link>
        </li>
        <li className={styles.Item}>
          <Link href="#experience" onClick={() => setIsChecked(false)}>
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

  const { isChecked, setIsChecked } = useContext(Context);

  return (
    <div className={styles.Sidebar}>
      <input type="checkbox" className={styles.BurgerCheck} checked={isChecked} onClick={() => setIsChecked(!isChecked)} />
      <div className={styles.Sidebar__Burger}>
        <div className={styles.Burger} />
      </div>
      <div className={styles.Sidebar__Items}>
        <Items />
        <Contact />

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

  const [isChecked, setIsChecked] = useState(false);

  return (
    <Context.Provider value={{ isChecked, setIsChecked }}>
      <div className={styles.Bar}>
        <div className={styles.Bar__Sidebar}>
          <Sidebar />
        </div>
        <div className={styles.Bar__Navbar}>
          <Navbar />
        </div>
      </div>
    </Context.Provider>
  );
}
