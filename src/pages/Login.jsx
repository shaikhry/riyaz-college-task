import { Box, Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });
    console.log(formData, "formdataaaaaaaaaaaaaaaa");
  
    const navigate = useNavigate();
  
    
    const handleLogin = () => {
      if (formData.email==="admin" && formData.password==="12345678"){
        navigate("/home")
      }else{
        // alert("wrong password")
      }
    };


  return (
    <Box
    component="main"
    sx={{
      flexGrow: 1,
      p: 2,
    }}
  >
     <div
        style={{ width: "auto", height: "100vh", backgroundColor: "#F0EFFD" }}
      >
        <div
          style={{
            width: "30%",
            height: "70vh",
            margin: 50,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "white",
            float: "right",
            borderRadius: "10%",
          }}
        >
          <div style={{ width: "80%", height: "inherit", marginTop: 30 }}>
            {/* <button onClick={handleLogin}>click me so s</button> */}
            <h2>Log in</h2>
            <p style={{ marginTop: "8px" }}>
              Enter your email & password to login
            </p>
            <label>
              <h4 style={{ marginTop: "24px" }}>Email Address</h4>
            </label>
            <TextField
              sx={{ width: "80%" }}
              variant="outlined"
              value={formData.email}
              onChange={(event) =>
                setFormData((prevState) => ({
                  ...prevState,
                  email: event.target.value,
                }))
              }
            />
            <label>
              <h4 style={{ marginTop: "24px" }}> Password</h4>
            </label>
            <TextField
              type="password"
              sx={{ width: "80%" }}
              variant="outlined"
              value={formData.password}
              onChange={(event) =>
                setFormData((prevState) => ({
                  ...prevState,
                  password: event.target.value,
                }))
              }
            />
            <div style={{ marginTop: "24px" }}>
              Remember password{" "}
              <a style={{ fontSize: 10, textDecoration: "none" }} href="#">
                Forgot password?
              </a>
            </div>
            <div>
              <Button
                sx={{ backgroundColor: "#7366FF", marginTop: "24px" }}
                variant="contained"
                onClick={() => {
                  handleLogin();
                  // handleGotoHome()
                  // localStorage.setItem("token", apiData?.token);
                }}
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </div>
  </Box>
  )
}

