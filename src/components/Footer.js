import styles from "../app/page.module.css";


export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerText}>
                <p className={styles.footerCopyright}>&copy; Math Hero Club </p>
            </div>
      </div>
    )
}