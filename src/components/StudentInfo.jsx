import {
  Avatar,
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { Context } from "../Context";
import Card from "./CardForClass";
import ImageIcon from "@mui/icons-material/Image";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SideBar from "./SideBar";

const drawerWidth = 240;

const StudentInfo = () => {
  const [data, setData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);
  const [classObj, setClassObj] = useState({
    Name: "",
    class: "",
  });
  //   const [contextData ,setContextData] = useContext(Context);
  //   console.log(contextData, "collageClass 54");
  const handleSave = () => {
    const obj = {
      ...classObj,
      id: Math.random().toString(),
    };
    // setContextData((prevState) => [...prevState, classObj.class]);
    if (isEdit) {
      data.splice(editIndex, 1, obj);
      setData(() => [...data]);
    } else {
      setData((prevState) => [...prevState, obj]);
    }
    setClassObj({
      Name: "",
      class: "",
    });
    setIsEdit(false);
    // Collageclass.setCollageClass((prevState) => [...prevState, classObj.class]);
  };
  //   const Collageclass =useContext(Context)

  const handleEdit = (item, i) => {
    setClassObj(item);
    setIsEdit(true);
    setEditIndex(i);
  };

  const handleDelete = (i) => {
    data.splice(i, 1);
    setData(() => [...data]);
  };
  const Collageclass = useContext(Context);
  console.log(classObj, "classObj from stu");
  console.log(data, "data");

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
            width: "500px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <TextField
            label={"Student Name"}
            size="small"
            value={classObj.Name}
            onChange={(event) =>
              setClassObj((prevState) => ({
                ...prevState,
                Name: event.target.value,
              }))
            }
          />
          <FormControl sx={{ width: "200px" }} size="small">
            <InputLabel id="demo-simple-select-label">Class</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Collageclass.collageClass}
              label="Class"
              // onChange={handleChange}
              onChange={(event) =>setClassObj((prevState) => ({ ...prevState, class: event.target.value })) }
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
            disabled={!classObj.Name || !classObj.class}
          >
            {isEdit ? "Update" : "Add"}
          </Button>
        </Box>
        {/* <Card data={data} handleEdit={handleEdit} handleDelete={handleDelete} /> */}
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {data?.map((item, index) => {
            console.log(item.Field, "item.Field");
            return (
              <>
                <ListItem
                  key={index}
                  secondaryAction={
                    <>
                      <IconButton
                        onClick={() => handleDelete(index)}
                        aria-label="comment"
                      >
                        <DeleteIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => handleEdit(item, index)}
                        aria-label="comment"
                      >
                        <EditIcon />
                      </IconButton>
                    </>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <ImageIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={item.Name} secondary={item.class} />
                </ListItem>
              </>
            );
          })}
        </List>
      </Box>
    </>
  );
};

export default StudentInfo;
