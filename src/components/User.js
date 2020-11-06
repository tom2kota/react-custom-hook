import {Card} from "./Card";
import {useFetch} from "../effects/useFetch";

export const User = ({userId}) => {
    const url = `https://json-server-posts.herokuapp.com/users`
    const user = useFetch(`${url}?id=${userId}`)

    return (
        <Card>
            {user ? (
                <div>
                    <h1>{user.username}</h1>
                    <p>{user.name}</p>
                </div>) : (
                <p>User not found</p>
            )}
        </Card>
    )
}
