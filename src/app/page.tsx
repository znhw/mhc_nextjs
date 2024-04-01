import Image from "next/image";
import styles from "./page.module.css";
import Layout from "../components/Layout";
import fs from "fs"
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import Head from "next/head";

//Retrieve content with slug 
// const getLessonContent = (slug: string) => {

//   const file = 'lessons/home.md'
//   const content =  fs.readFileSync(file,  'utf8')
//   const matterResult = matter(content)
//   return matterResult;
// }

export default function Home(props: any) {
  // const slug = props.params.slug
  // const lesson = getLessonContent(slug)

  return (
    
    <div className={styles.App}>
    
      <Layout>
        <div className={styles.lessonList}>
          <h2>最新加入的：</h2>    
          <br/>
          <p>Form 1 -&gt; <a className={styles.underlined} href="/mathematics/form-1/data-handling">Chapter 12: Data Handling</a>       
          </p> 
          <p>Form 4 -&gt; <a className={styles.underlined} href="/mathematics/form-4/probability-combined-dependent-events">Chapter 9.3: Probability of Combined Events - Dependent Events</a>       
          </p> 
          <p>Form 4 -&gt; <a className={styles.underlined} href="/mathematics/form-4/probability-combined-independent-mutually-exclusive-events">Chapter 9.2: Probability of Combined Events - Independent & Mutually Exclusive Events</a>       
          </p> 
          <p>Form 4 -&gt; <a className={styles.underlined} href="/mathematics/form-4/probability-combined-independent-non-mutually-exclusive-events">Chapter 9.1: Probability of Combined Events - Independent & Non-mutually Exclusive Events</a>       
          </p> 
          <p>Form 2 -&gt; <a className={styles.underlined} href="/mathematics/form-2/complement-event-probability">Chapter 13.2: Complement of an Event in Probability</a>       
          </p> 
          <p>Form 2 -&gt; <a className={styles.underlined} href="/mathematics/form-2/simple-probability">Chapter 13.1: Simple Probability</a>       
          </p> 
    
        </div>
      </Layout>
    </div>
  );
}
