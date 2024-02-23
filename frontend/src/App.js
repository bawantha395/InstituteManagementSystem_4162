import React from "react";
import Login from "./components/Login2";
import Register from "./components/Register";
import SignIn from "./components/SignIn"
import SignIn2 from "./components/SignIn2"
import TsSignIn from "./components/TsSignin";
import SignUp from "./components/SignUp"
import SignUp2 from "./components/SignUp2"
import TsSignUp from "./components/TsSignup";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Staff from "./pages/Staff";
//import "./App.css";

import { selectUser } from "./slices/userSlice";
import { useSelector } from "react-redux";
import Logout from "./components/Logout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TeacherMarks from "./components/TeacherMarks";


import CreateMark from "./components/CreateMark";

import ViewMarks from './components/ViewMarks';
import ViewMarks2 from "./components/Viewmarks2";
import Subjects from "./components/Subjects";
// import Classes from "./components/Classes";
import ChangeMark from "./components/ChangeMark";



const App = () => {
    const user = useSelector(selectUser);
    console.log(user);

    return (

        <div className="app">
            <Router>
                <Header></Header>
                <Routes>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path="/signin" element={<SignIn></SignIn>}></Route>
                    <Route path="/signin2" element={<SignIn2></SignIn2>}></Route>
                    <Route path="/ts_signin" element={<TsSignIn></TsSignIn>}/>
                    <Route path="/signup" element={<SignUp></SignUp>}></Route>
                    <Route path="/signup2" element={<SignUp2></SignUp2>}></Route>
                    <Route path="/ts_signup" element={<TsSignUp></TsSignUp>}/>

                    <Route exact path = "/" element={<Home/>} />
                    <Route exact path = "/about" element={<About/>} />
                    <Route exact path = "/sontact" element={<Contact/>} />
                    <Route exact path = "/services" element={<Services/>} />
                    <Route exact path = "/staff" element={<Staff/>} />
                    <Route exact path = "/subjects" element={<Subjects/>} />
                    {/* <Route exact path = "/classes" element={<Classes/>} /> */}
                    
                    

                    <Route path="/teachermarks" element={
                        user ? <TeacherMarks></TeacherMarks> : <SignIn />
                    } />

                    <Route path="/createmark" element={
                      <CreateMark></CreateMark> 
                    } />
                    <Route path="/viewmarks" element={
                      <ViewMarks></ViewMarks> 
                    } />

                    <Route path="/viewmarks2" element={
                      <ViewMarks2></ViewMarks2> 
                    } />

                    <Route path="/changemark/:id" element={<ChangeMark />} />
                   



                    {/* <Route path="/" element={
                        //only show the logout component if the user is logged in
                        user ? <Logout /> :
                            <Login />

                    } /> */}
                    <Route path="/logout" element={
                        //only show the logout component if the user is logged in
                        user ? <Logout /> : <Login />
                    } />

                    <Route path="/register" element={
                        //only show the logout component if the user is logged in
                        user ? <Logout /> : <Register />
                    } />
                </Routes>
                <Footer></Footer>
            </Router>
        </div>

    );
};

export default App;
