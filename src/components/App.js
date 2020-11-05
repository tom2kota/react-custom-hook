import {User} from "./User";
import {Post} from "./Post";
import './App.css'

export const App = () =>
    <div className="App">
        <User userId={10}/>
        <Post postId={5}/>
    </div>

