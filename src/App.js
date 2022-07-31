import './App.css';
import ButtonAppBar from './components/navbar/Navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import DataGridDemo from './components/datatable/Datatable.tsx';
import Navbar from './components/navbar/Navbar.jsx';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
            <Route path="/" element={<DataGridDemo/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
