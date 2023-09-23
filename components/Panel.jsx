import styles from "./Panel.module.scss";

const Panel = ({ id, children }) => {
    return (
        <div id={id} className={styles.Panel}>
            {children}
        </div>
    );
};

export default Panel;
