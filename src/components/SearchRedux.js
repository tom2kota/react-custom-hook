import {useEffect, useReducer} from "react";
import {Card} from "./Card";

const INITIAL_STATE = {
    user: null,
    searchQuery: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {...state, user: action.payload}
        case 'SET_SEARCH_QUERY':
            return {...state, searchQuery: action.payload}
        default:
            return state
    }
}

const setUser = user => ({
    type: 'SET_USER',
    payload: user
})

const setSearchQuery = searchQuery => ({
    type: 'SET_SEARCH_QUERY',
    payload: searchQuery
})

export const SearchRedux = () => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
    const {user, searchQuery} = state

    useEffect(() => {
        console.log('useEffect ... SearchRedux component', searchQuery)

        if (searchQuery.length) {
            const fetchFunc = async () => {
                const response = await fetch(`https://json-server-posts.herokuapp.com/users?username=${searchQuery}`)
                const responseJson = await response.json()
                dispatch(setUser(responseJson[0]))
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
                onChange={
                    event => dispatch(setSearchQuery(event.target.value.replace(/(^\w{1})|(\s+\w{1})/g,
                        firstLetter => firstLetter.toUpperCase())))}
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
