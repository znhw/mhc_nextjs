import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = ( props: PostMetadata) => {
    return <div key={props.slug}>
        <Link href={`form-1/${props.slug}`}>
        <h2>
        {props.title}
        </h2>
        {/* <p>{props.date}</p> */}
        </Link>     
    </div>
}

export default PostPreview;