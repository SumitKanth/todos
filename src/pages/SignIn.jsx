import { Box, Button, Container, Paper, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate();
  return (
    <>
      <div
        style={{
            backgroundImage: "linear-gradient(rgb(255 255  209), rgb(249 159 159))"  
        }}
      >
        <Container
         component={"main"}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            height: "100vh",
          }}
        >
            <Paper
                sx={{
                    padding: "4rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column"
                }}
            >
                <Typography variant="h4" >Sign In</Typography>
                <Typography variant="caption"
                    sx={{
                        marginLeft: "3rem",
                        color: "blue"
                    }}
                >Or <span
                    style={{
                        cursor: "pointer"
                    }}
                    onClick={() => navigate("/signup")}
                >
                    SignUp</span></Typography>

                <form
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "2rem"
                    }}
                >
                  
                    <TextField type="number" label="Enter Number" variant="standard" fullWidth required
                     sx={{
                        marginBottom: "2rem"
                    }}
                    />

                    <Button variant="outlined" fullWidth>Submit</Button>
                    
                </form>
            </Paper>

        </Container>
      </div>
    </>
  );
};

export default SignIn;
