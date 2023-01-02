import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { Context } from "../Context";
import Card from "./CardForClass";
import CardForTeacher from "./CardForTeacher";
import SideBar from "./SideBar";

const drawerWidth = 240;


const TeacherManagement = () => {
  const [data, setData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);
  const [classSelect, setClassSelect] = useState("");
  const [classObj, setClassObj] = useState({
    FullName: "",
    Email: "",
    PhoneNumber: "",
    Class: "",
  });

  const handleSave = () => {
    const obj = {
      ...classObj,
      id: Math.random().toString(),
    };
    if (isEdit) {
      data.splice(editIndex, 1, obj);
      setData(() => [...data]);
    } else {
      setData((prevState) => [...prevState, obj]);
    }
    setClassObj({
      FullName: "",
      Email: "",
      PhoneNumber: "",
      Class: "",
    });
    setIsEdit(false);
  };
  //   const [contextData, setContextData] = useContext(Context);
  //   console.log(contextData,"collageClass from teacher")

  const handleEdit = (item, i) => {
    setClassObj(item);
    setIsEdit(true);
    setEditIndex(i);
  };

  const handleDelete = (i) => {
    data.splice(i, 1);
    setData(() => [...data]);
  };

  console.log(classObj, "classObj");
  console.log(data, "data");

  const Collageclass = useContext(Context);
  console.log(Collageclass.collageClass, "Collageclass");
  console.log(classSelect, "classSelect");

  const handleChange = (event) => {
    setClassObj((prevState) => ({
      ...prevState,
      class: event.target.value,
    }))
  };


  return (
    <>
    <SideBar/>
     <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
      <Box
        sx={{
          width: "1000px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <TextField
          label={"Full Name"}
          size="small"
          value={classObj.FullName}
          onChange={(event) =>
            setClassObj((prevState) => ({
              ...prevState,
              FullName: event.target.value,
            }))
          }
        />
        <TextField
          label={"Email"}
          size="small"
          value={classObj.Email}
          onChange={(event) =>
            setClassObj((prevState) => ({
              ...prevState,
              Email: event.target.value,
            }))
          }
        />
        <TextField
          label={"Phone Number"}
          size="small"
          value={classObj.PhoneNumber}
          onChange={(event) =>
            setClassObj((prevState) => ({
              ...prevState,
              PhoneNumber: event.target.value,
            }))
          }
        />
        <FormControl sx={{ width: "200px" }} size="small">
          <InputLabel id="demo-simple-select-label">Class</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={classSelect}
            label="Class"
            onChange={handleChange}
          >
            {Collageclass.collageClass.map((item) => {
              return (
                <MenuItem value={item} key={item}>
                  {item}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <Button
          onClick={handleSave}
          disabled={!classObj.FullName || !classObj.Email}
        >
          {isEdit ? "Update" : "Add"}
        </Button>
      </Box>
      {/* <Card data={data} handleEdit={handleEdit} handleDelete={handleDelete} /> */}
      <CardForTeacher
        data={data}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      </Box>
    </>
  );
};

export default TeacherManagement;
