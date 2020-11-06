import {Card} from "./Card";
import {useFetch} from "../effects/useFetch";

export const Post = ({postId}) => {
    const url = `https://json-server-posts.herokuapp.com/posts`
    const post = useFetch(`${url}?id=${postId}`)

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
