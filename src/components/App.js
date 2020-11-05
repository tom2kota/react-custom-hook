import {User} from "./User";
import {Post} from "./Post";
import './App.css'

export const App = () =>
    <div className="App">
        <User userId={1}/>
        <Post postId={2}/>
    </div>

