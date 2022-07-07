import "./App.css";
import PostList from "./components/PostList";
import { Routes, Route, Link } from "react-router-dom";
import NewPost from "./components/NewPost";


function App() {
  
  return (
    <div className="App">
      <Routes>
        
        <Route exact path="/" element={<PostList />}></Route>
        <Route exact path="/NewPost" element={<NewPost />}></Route>
      </Routes>
    </div>
  );
}

export default App;
