import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from '@pages/Login';
import SignUp from '@pages/SignUp';
const App = () =>{
    return <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/singup" element={<SignUp/>}/>
    </Routes>;
};

export default App;