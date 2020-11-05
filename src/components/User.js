import {useEffect, useState} from "react";
import {Card} from "./Card";

export const User = ({userId}) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        console.log('User useEffect')

        const fetchUser = async ()=> {
            const response = await fetch(`https://json-server-posts.herokuapp.com/users?id=${userId}`)
            const users = await response.json()
            setUser(users[0])
        }

        fetchUser()

    }, [userId])

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
