import Layout from "../../../components/Layout";
import styles from "../../page.module.css";
import getPostMetadata from '../../../fetch/getPostMetadataF4'
import PostPreview from "../../../fetch/PostPreviewF4";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Form 4 Mathematics"
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
            <span className={styles.lessonTag}>Form 4 Mathematics Lessons:</span>
            <p>            
              {postPreviews}
            </p>
          </div>
     
        </Layout>
      </div>
    
    );
}

export default Home




