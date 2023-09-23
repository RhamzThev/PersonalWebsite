/* eslint-disable @next/next/no-img-element */
import styles from "./Landing.module.scss";
import Panel from "./Panel";

const Landing = () => {
  return (
    <Panel>
      <div className={styles.landingContainer}>
        <div className={styles.landing}>
          <div className={styles.textContainer}>
            <div className={styles.text}>
              <div className={styles.subtitleContainer}>
                <div className={styles.subtitle}>Hi, I&apos;m</div>
              </div>
              <div className={styles.titleContainer}>
                <div className={styles.title}>
                  <span className={styles.caret}>&lt;</span>
                  <span className={styles.name}>Rhamsez Thevenin</span>
                  <span className={styles.caret}>/&gt;</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.photoContainer}>
            <div className={styles.photo}>
              <img className={styles.image} alt="Portrait" src="landing.png" />
              <div className={styles.designContainer}>
                <div className={styles.design} />
              </div>
              {/* <img className={styles.subtract} alt="Design" src="landing.svg" /> */}
            </div>
          </div>
        </div>
      </div>
    </Panel>
  );
};

export default Landing