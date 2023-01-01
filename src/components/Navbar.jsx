import styles from "./Navbar.module.scss";

export default function Navbar() {
    return (
        <div className={styles.Navbar}>
            <div className={styles.Navbar__Items}>
                <ul className={styles.Items}>
                    <li className={styles.Item}>About Me</li>
                    <li className={styles.Item}>Experience</li>
                    <li className={styles.MainItem}>Rhamsez Thevenin</li>
                    <li className={styles.Item}>Projects</li>
                    <li className={styles.Item}>Contact</li>
                </ul>
            </div>
        </div>
    )
}
