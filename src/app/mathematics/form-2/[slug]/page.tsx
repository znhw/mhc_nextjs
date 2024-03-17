import Layout from "../../../../components/Layout";
import styles from "../../../page.module.css"
import fs from "fs"
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../../fetch/getPostMetadataF2";
import Script from "next/script";

//Retrieve content with slug 
const getLessonContent = (slug: string) => {

  const folder = 'src/lessons/math-form-2/'
  const file = `${folder}${slug}.md`
  const content =  fs.readFileSync(file,  'utf8')
  const matterResult = matter(content)
  return matterResult;
}

export const generateStaticParams = async () => {
  const lessons = getPostMetadata();
  return lessons.map((lesson) => {
    slug: lesson.slug
  })
}
export async function generateMetadata({ params }) {
  const slug = params.slug
  const lesson = getLessonContent(slug)
  return {
    title: lesson.data.title
  }
}


const LessonPage = (props: any) => {
  
  const slug = props.params.slug
  const lesson = getLessonContent(slug)
    return (
      <>
        <Script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"/>
        <div className={styles.App}>
          <Layout>
            <div className={styles.title}>
              <a className={styles.lessonTag} href="/mathematics/form-2">&larr;	Form 2: Mathematics</a>
              <h1 className={styles.lessonTitle}>{lesson.data.title}</h1>
            </div>
            <Markdown className={styles.markdown}>{lesson.content}</Markdown>
         </Layout>
        </div>
      
      </>
   
    )
}
  
export default LessonPage;