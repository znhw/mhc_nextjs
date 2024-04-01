import Layout from "../../../components/Layout";
import styles from "../../page.module.css";
import getPostMetadata from '../../../fetch/getPostMetadataF1'
import PostPreview from "../../../fetch/PostPreviewF1";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Form 1 Mathematics"
}
 

const Home = () => {
  const postMetadata = getPostMetadata()
  const postPreviews = postMetadata.map((lesson) => (
      <PostPreview 
        key={lesson.slug} 
        {...lesson}
      />
    ))
    return (
      <div className={styles.App}>
        <Layout >
          <div className={styles.lessonList}>
            <span className={styles.lessonTag}>Form 1 Mathematics Lessons:            <br></br>
            </span>
            <p>            
              {postPreviews}
            </p>
          </div>
    
        </Layout>
    </div>
    );
}

export default Home