import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import styles from "../app/page.module.css";


const PostPreview = ( props: PostMetadata) => {
    return <div key={props.slug}>
        <Link href={`form-5/${props.slug}`}>
        <p className={styles.underlined}>
        {props.title}
        </p>
        </Link>     
    </div>
}

export default PostPreview;