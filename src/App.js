import './App.css';
import ButtonAppBar from './components/navbar/Navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import DataGridDemo from './components/datatable/Datatable.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import NewPost from './components/postForm/PostForm.jsx';
import Comments from './components/comments/Comments.tsx';
import Post from './components/post/Post';
import Edit from './components/edit/Edit';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
      
          <Routes>
              <Route path="/newpost" element={<NewPost/>}/>
              <Route path="/post" element={<Post/>}/>
              <Route path="/editpost" element={<Edit/>}/>
              <Route path="/" element={<DataGridDemo/>}/>
              <Route path="/comments" element={<Comments/>}/>
          </Routes>
       
      </div>
    </BrowserRouter>
  );
}

export default App;
