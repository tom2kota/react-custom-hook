import {User} from "./User";
import {Post} from "./Post";
import {Search} from "./Search";
import './App.css'

export const App = () =>
    <div className="App">
        <h1>useReducer():</h1>
        <Search/>
        <h1>useFetch():</h1>
        <User userId={5}/>
        <Post postId={10}/>
    </div>

