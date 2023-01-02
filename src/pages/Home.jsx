import { Box } from "@mui/system";
import React from "react";
import ClassManagement from "../components/ClassManagement";
import SideBar from "../components/SideBar";
import StudentInfo from "../components/StudentInfo";
import TeacherManagement from "../components/TeacherManagement";

const drawerWidth = 240;
function Home() {
  return (
    <>
      <SideBar /> 
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <ClassManagement />
      </Box>
    </>
  );
}

export default Home;
