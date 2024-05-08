import Link from "next/link";
import type {Metadata} from "next";

function Post({post}:{ post: any }) {
    return (
        <div>
            <Link href={`/`}>Назад</Link><br/>
            <h2>{post?.title}</h2>
            <p>{post?.body}</p>
            <strong>Author id: {post?.userId}</strong>
        </div>
    );
}

export default Post;