/* eslint-disable @next/next/no-img-element */
import styles from "./Landing.module.scss";
import rozeJpg from "../public/roze.jpg";

function Title() {
  return (
    <div className={styles.Title}>
      <div className={styles.Title__Text}>
        <h1 className={styles.Text__Main}>Rhamsez Thevenin</h1>
        <h2 className={styles.Text__Sub}>Software Engineer</h2>
      </div>
      <div className={styles.Title__Img}>
        <img className={styles.Img} src={rozeJpg.src} alt="Roze Image" />
      </div>
    </div>
  );
}

export default function Landing({ children }) {
  return (
    <div className={styles.Landing}>
      <div className={styles.Landing__Title}>
        <Title />
      </div>
      <div className={styles.Landing__Content}>{children}</div>
    </div>
  );
}
