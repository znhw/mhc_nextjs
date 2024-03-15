import styles from "../app/page.module.css";

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.headerTitle}>
                <h1>数学英雄</h1>
            </div>
            <div className={styles.headerText}>
                <p>
                    <span>帮助🇲🇾中学生所提供的</span><br></br>
                    <span> Math & Add. Math 参考资料</span><br></br>
                    <span> (教程内容是依据马来西亚KSSM的课程)</span>
                </p>
            </div>
        </div>
    )
}