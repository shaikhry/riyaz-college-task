import { Box, Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { Context } from "../Context";
import CardForClass from "./CardForClass";
import Card from "./CardForClass";

const ClassManagement = () => {
  const [data, setData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);
  const [classObj, setClassObj] = useState({
    Field: "",
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
      Field: "",
      class: "",
    });
    setIsEdit(false);
    Collageclass.setCollageClass((prevState) => [...prevState, classObj.class]);

  };
  const Collageclass =useContext(Context)


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

  return (
    <>
      <Box
        sx={{
          width: "500px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <TextField
          label={"Faculty"}
          size="small"
          value={classObj.Field}
          onChange={(event) =>
            setClassObj((prevState) => ({
              ...prevState,
              Field: event.target.value,
            }))
          }
        />
        <TextField
          label={"Class"}
          size="small"
          value={classObj.class}
          onChange={(event) =>
            setClassObj((prevState) => ({
              ...prevState,
              class: event.target.value,
            }))
          }
        />
        <Button
          onClick={handleSave}
          disabled={!classObj.Field || !classObj.class}
        >
          {isEdit ? "Update" : "Add"}
        </Button>
      </Box>
      <CardForClass data={data} handleEdit={handleEdit} handleDelete={handleDelete} />
    </>
  );
};

export default ClassManagement;
