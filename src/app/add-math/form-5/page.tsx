import Layout from "../../../components/Layout";
import styles from "../../page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Form 5 Add Math"
}

const Home = () => {
  
    return (
      <div className={styles.App}>
        <Layout >
          <div className={styles.lessonList}>
            <span className={styles.lessonTag}>Form 5 Add Math Lessons:</span>
            <div className={styles.notFound}>
              <p className={styles.speechBubble1}>将会在2025年推出，请返回<a href="/" className={styles.notFoundLink}>主页</a></p>

              <iframe src="https://giphy.com/embed/JRUtn0sCuAn0bzfc4C" width="100%" height="100%" frameBorder="0" allowFullScreen></iframe></div><p><a href="https://giphy.com/stickers/crayon-shinchan-shin-chan-JRUtn0sCuAn0bzfc4C"></a></p>
            </div>
     
        </Layout>
      </div>
    
    );
}

export default Home