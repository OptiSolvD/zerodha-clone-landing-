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
    React.useState(1);

  const [open, setOpen] =
    React.useState(false);

  const handleAuth = async () => {

    try {

      // LOGIN

      if (formState === 0) {

        const { data } = await axios.post(

          "https://zerodha-clone-server-r4uq.onrender.com/login",

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
          "/";

      }

      // REGISTER

      if (formState === 1) {

        const { data } = await axios.post(

          "https://zerodha-clone-server-r4uq.onrender.com/register",

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

<Box

  sx={{

    display: "flex",

    height: "100vh",

    padding: "30px",

    gap: "30px",

    backgroundColor: "#f5f5f5",

  }}

>
  {/* LEFT IMAGE SECTION */}

 <Box

  sx={{

    width: "80%",

    backgroundImage:
      'url("/media/images/dashboard.jpeg")',

    backgroundSize: "contain",

    backgroundPosition: "center",

    backgroundRepeat: "no-repeat",

    backgroundColor: "#f5f5f5",

  }}

 />

  {/* RIGHT FORM SECTION */}

  <Paper

    elevation={6}

    square

    sx={{

      width: "420px",

      display: "flex",

      justifyContent: "center",

      alignItems: "center",

    }}

  >

    <Box

      sx={{

        width: "80%",

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

        sx={{ mt: 1, width: "100%" }}

      >

        <TextField

          margin="normal"

          required

          fullWidth

          label="Username"

          value={username}

          onChange={(e) =>

            setUsername(e.target.value)

          }

        />

        {

          formState === 1 && (

            <TextField

              margin="normal"

              required

              fullWidth

              label="Email"

              value={email}

              onChange={(e) =>

                setEmail(e.target.value)

              }

            />

          )

        }

        <TextField

          margin="normal"

          required

          fullWidth

          label="Password"

          type="password"

          value={password}

          onChange={(e) =>

            setPassword(e.target.value)

          }

        />

        <p style={{ color: "red" }}>

          {error}

        </p>

        <Button

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

              ? "LOGIN"

              : "REGISTER"

          }

        </Button>

      </Box>

    </Box>

  </Paper>

</Box>

      <Snackbar

        open={open}

        autoHideDuration={4000}

        message={message}

      />

    </ThemeProvider>

  );

}