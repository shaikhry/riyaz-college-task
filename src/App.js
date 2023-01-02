import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import SideBar from "./components/SideBar";
import { useState } from "react";
import { Context } from "./Context";
import { Route, Routes } from "react-router-dom";
import TeacherManagement from "./components/TeacherManagement";
import StudentInfo from "./components/StudentInfo";
import Login from "./pages/Login";
import { Box } from "@mui/material";
import Student from "./pages/Student";

const drawerWidth = 240;

function App(props) {
  const [collageClass, setCollageClass] = useState([]);

  return (
    // <Context.Provider value={{ collageClass: [collageClass, setCollageClass] }}>
    <>
    <Context.Provider value={{ collageClass, setCollageClass }}>
      {/* {props.children} */}
      <div className="App">
      </div>

    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/student" element={<Student />} />
      <Route path="/teacher" element={<TeacherManagement />} />
    </Routes>
    </Context.Provider>


    </>
  );
}

export default App;
