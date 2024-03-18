import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import styles from "../app/page.module.css";

const PostPreview = ( props: PostMetadata) => {
    return <div key={props.slug}>
        <Link href={`form-1/${props.slug}`} className={styles.underlined}>
        <p className={styles.underlined}> 
        {props.title}
        </p>
        {/* <p>{props.date}</p> */}
        </Link>     
    </div>
}

export default PostPreview;