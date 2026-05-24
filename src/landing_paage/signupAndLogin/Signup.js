import * as React from "react";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Snackbar } from "@mui/material";

import axios from "axios";

const defaultTheme = createTheme();

export default function Authentication() {

  const [username, setUsername] =
    React.useState("");

  const [email, setEmail] =
    React.useState("");

  const [password, setPassword] =
    React.useState("");

  const [error, setError] =
    React.useState("");

  const [message, setMessage] =
    React.useState("");

  const [formState, setFormState] =
    React.useState(0);

  const [open, setOpen] =
    React.useState(false);

  const handleAuth = async () => {

    try {

      // LOGIN

      if (formState === 0) {

        const { data } = await axios.post(

          "http://localhost:5000/login",

          {
            username,
            password,
          },

          {
            withCredentials: true,
          }

        );

        setMessage(data.message);

        setOpen(true);

        setError("");

        window.location.href =
          "http://localhost:3001/";

      }

      // REGISTER

      if (formState === 1) {

        const { data } = await axios.post(

          "http://localhost:5000/register",

          {
            username,
            email,
            password,
          },

          {
            withCredentials: true,
          }

        );

        setMessage(data.message);

        setOpen(true);

        setError("");

        setFormState(0);

        setPassword("");

      }

    } catch (err) {

      console.log(err);

      setError(

        err.response?.data?.message ||

        "Something went wrong"

      );

    }

  };

  return (

    <ThemeProvider theme={defaultTheme}>

      <Grid
        container
        component="main"
        sx={{
          height: "100vh",
        }}
      >

        <CssBaseline />

        {/* LEFT IMAGE SECTION */}

        <Grid

          item

        //   xs={false}

          sm={4}

          md={7}

          sx={{

            backgroundImage:
              'url("frontend/public/images/dashboard.jpeg")',

            backgroundRepeat: "no-repeat",

            backgroundSize: "cover",

            backgroundPosition: "center",

            minHeight: "100vh",

          }}

        />

        {/* RIGHT FORM SECTION */}

        <Grid

          item

          xs={12}

          sm={8}

          md={5}

          component={Paper}

          elevation={6}

          square

        >

          <Box

            sx={{

              my: 8,

              mx: 4,

              display: "flex",

              flexDirection: "column",

              alignItems: "center",

            }}

          >

            <Avatar

              sx={{

                m: 1,

                bgcolor: "secondary.main",

              }}

            >

              <LockOutlinedIcon />

            </Avatar>

            {/* LOGIN / REGISTER BUTTONS */}

            <div>

              <Button

                variant={
                  formState === 0
                    ? "contained"
                    : "text"
                }

                onClick={() => {

                  setFormState(0);

                }}

              >

                SIGN IN

              </Button>

              <Button

                variant={
                  formState === 1
                    ? "contained"
                    : "text"
                }

                onClick={() => {

                  setFormState(1);

                }}

              >

                SIGN UP

              </Button>

            </div>

            {/* FORM */}

            <Box

              component="form"

              noValidate

              sx={{ mt: 1 }}

            >

              <TextField

                margin="normal"

                required

                fullWidth

                id="username"

                label="Username"

                name="username"

                value={username}

                autoFocus

                onChange={(e) =>

                  setUsername(
                    e.target.value
                  )

                }

              />

              {

                formState === 1

                ?

                (

                  <TextField

                    margin="normal"

                    required

                    fullWidth

                    id="email"

                    label="Email"

                    name="email"

                    value={email}

                    onChange={(e) =>

                      setEmail(
                        e.target.value
                      )

                    }

                  />

                )

                :

                null

              }

              <TextField

                margin="normal"

                required

                fullWidth

                name="password"

                label="Password"

                type="password"

                value={password}

                id="password"

                onChange={(e) =>

                  setPassword(
                    e.target.value
                  )

                }

              />

              <p style={{ color: "red" }}>

                {error}

              </p>

              <Button

                type="button"

                fullWidth

                variant="contained"

                sx={{
                  mt: 3,
                  mb: 2,
                }}

                onClick={handleAuth}

              >

                {

                  formState === 0

                  ?

                  "LOGIN"

                  :

                  "REGISTER"

                }

              </Button>

            </Box>

          </Box>

        </Grid>

      </Grid>

      <Snackbar

        open={open}

        autoHideDuration={4000}

        message={message}

      />

    </ThemeProvider>

  );

}