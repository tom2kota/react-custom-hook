import {useEffect, useState} from "react";
import {Card} from "./Card";

export const Search = () => {

    const [user, setUser] = useState(null)
    const [searchQuery, setSearchQuery] = useState('Bret')

    useEffect(() => {
        console.log('useEffect ... Search component', searchQuery)

        if (searchQuery.length) {
            const fetchFunc = async () => {
                const response = await fetch(`https://json-server-posts.herokuapp.com/users?username=${searchQuery}`)
                const responseJson = await response.json()
                console.log(responseJson)
                setUser(responseJson[0])
            }
            fetchFunc()
        }

    }, [searchQuery])

    return (
        <Card>
            <input
                type='search'
                value={searchQuery}
                placeholder='Name'
                onChange={event => setSearchQuery(event.target.value)}
            />
            {
                user ? (
                    <div>
                        <h3>{user.name}</h3>
                        <h3>{user.username}</h3>
                        <h3>{user.email}</h3>
                    </div>
                ) : (
                    <p>No User found</p>
                )
            }
        </Card>
    )
}
