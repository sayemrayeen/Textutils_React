import './App.css';
import { Navbar } from './My Component/Navbar';
import { TextForm } from './My Component/TextForm';
import React, { useState } from 'react'
import { Alert } from './My Component/Alert';
import { About } from './My Component/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');  // Whether dark mode is enable or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const removerBodyClasses = () =>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-waning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
  }

  const toggleMode = (cls) => {
    removerBodyClasses()
    console.log(cls);
    document.body.classList.add('bg-' + cls)
    if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
        showAlert("Dark mode has been enable", "success");
        // document.title = "TextUtils - Dark Mode"
        // setInterval(() => {
        //   document.title = "TextUtils - is Amazing Now"
          
        // }, 2000);
        // setInterval(() => {
        //   document.title = "Install TextUtils Now"
          
        // }, 1500);
      }
        
    else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enable", "success");
        document.title = "TextUtils - Light Mode"
    }
  }

  return (
    <>
    {/* // <Navbar title="TextUtils" aboutText="About US"/> */}
    {/* // <Navbar /> */}
    <BrowserRouter>
    <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
      {/* /users --> component 1
      /users/home --> componnet 2 */}
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>} />
            <Route exact path='/' element={<TextForm showAlert={showAlert}  heading=" Try TextUtils - Word Counter, Character Counter, Remove Extra spaces" mode={mode}/>} />
        </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
