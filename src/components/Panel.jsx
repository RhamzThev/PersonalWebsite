/* eslint-disable @next/next/no-img-element */
import styles from "./Panel.module.scss";

function Content({ image, subtitle, paragraph }) {
  return (
    <div className={styles.Content}>
      <div className={styles.Content__Image}>
        <img className={styles.Image} src={image} alt="Lorem Picsum" />
      </div>
      <div className={styles.Content__Text}>
        <h2 className={styles.Text__Subtitle}>{subtitle}</h2>
        <h3 className={styles.Text__Paragraph}>{paragraph}</h3>
      </div>
    </div>
  );
}

export default function Panel({ id, type, content }) {
  return (
    <div id={id} className={styles.Panel} type={type}>
      <div className={styles.Panel__Title}>
        <h1 className={styles.Title}>{content.title}</h1>
      </div>
      {content.content.map((x, key) => {
        return (
          <div key={key} className={styles.Panel__Content}>
            <Content
              image={x.image}
              subtitle={x.subtitle}
              paragraph={x.paragraph}
            />
          </div>
        );
      })}
    </div>
  );
}
