import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

export default function CardForTeacher({ data, handleEdit, handleDelete }) {
  console.log(data, "data teacher");
  return (
    <>
      {data?.map((item, index) => {
        return (
          <>
            <Card sx={{ maxWidth: 340,m:1 }} key={index}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {item?.FullName}
                </Typography>
                <Typography variant="caption" component="div">
                  {item?.Email}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {item?.PhoneNumber}
                </Typography>
                <Typography variant="body2">
                  {`class ${item?.class}`}
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small"
                onClick={() => handleEdit(item, index)}>
                  Edit
                </Button>
                <Button size="small" 
                 onClick={() => handleDelete(index)}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </>
        );
      })}
    </>
  );
}
