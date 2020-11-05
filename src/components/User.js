import {Card} from "./Card";

export const User = ({userId}) => {
    const user = null

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
