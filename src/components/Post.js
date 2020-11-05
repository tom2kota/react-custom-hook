import {Card} from "./Card";

export const Post = ({postId}) => {
    const post = null

    return (
        <Card>
            {post ? (
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>) : (
                <p>Post not found</p>
            )}
        </Card>
    )
}
