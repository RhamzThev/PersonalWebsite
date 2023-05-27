import React from 'react';
import styles from "./resume.module.scss"

const ResumePage = () => {
  return (
    <div className={styles.Resume}>
      <embed className={styles.Resume_PDF} src="/resume.pdf" type="application/pdf"/>
    </div>
  );
};

export default ResumePage;
