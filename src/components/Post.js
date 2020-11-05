import {useEffect, useState} from "react";
import {Card} from "./Card";

export const Post = ({postId}) => {
    const [post, setPost] = useState(null)

    useEffect(
        () => {
            console.log('Post useEffect')

            const fetchPosts = async () => {
                const response = await fetch(`https://json-server-posts.herokuapp.com/posts?id=${postId}`)
                const posts = await response.json()
                setPost(posts[0])
            }

            fetchPosts()
        }, [postId]
    )

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
