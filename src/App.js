import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Student from './pages/student';
import {MyContext} from './context/MyContext';
import { useState } from 'react';

function App() {
  const [loggedIn,setLoggedIn] = useState(true);
  return (
    <MyContext.Provider value={{loggedIn,setLoggedIn}}>
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div>
          <Routes>
            <Route path="/students/*" element={<Student />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;