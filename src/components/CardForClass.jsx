import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React from "react";
import ImageIcon from "@mui/icons-material/Image";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const CardForClass = ({ data,handleEdit ,handleDelete}) => {
  console.log(data, "CardForClass");

  return (
    <>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
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
                <ListItemText
                  primary={item.Field}
                  secondary={item.class}
                />
              </ListItem>
            </>
          );
        })}
      </List>
    </>
  );
};

export default CardForClass;
