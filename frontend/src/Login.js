import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Typography,
  Grid,
  Container,
  CssBaseline,
  TextField,
  Button,
} from "@mui/material";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import useStyles from "./styles";

const Login = () => {
  const navigate = useNavigate();

  const [isLogged, setIsLogged] = useState(localStorage.getItem("email"));

  const [isEmailNotFound, setIsEmailNotFound] = useState(false);

  const userSchema = yup.object().shape({
    email: yup.string().email("Enter a proper email").required(),
    password: yup.string().required(),
  });

  // form validation react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchema) });

  useEffect(() => {
    if (isLogged) navigate("/", { state: { loggedIn: true } });
  });

  // api end point for backend
  const url =
    "https://user-authentication-git-main-niteshswarnakar.vercel.app/api/users/signin";

  //classes for styling
  const classes = useStyles();

  const submitHandler = async (data) => {
    setIsEmailNotFound(false);
    const requestBody = {
      email: data.email,
      password: data.password,
    };

    try {
      const { data } = await axios.post(url, requestBody);
      localStorage.setItem("email", data.email);
      localStorage.setItem("token", data.token);
      setIsLogged(true);
      navigate("/");
      window.location.reload();
    } catch (err) {
      setIsEmailNotFound(true);
    }
  };

  return (
    <>
      <CssBaseline />
      <main>
        <Container className={classes.marginTop} maxWidth="sm">
          <Typography variant="h3" align="center" color="textPrimary">
            Login
          </Typography>
        </Container>
        <Grid className={classes.gridContainer} container>
          <Grid className={classes.formDiv} item xs={12} md={6}>
            <form
              className={classes.formContainer}
              onSubmit={handleSubmit(submitHandler)}>
              <TextField
                fullWidth
                required
                id="email"
                label="email address"
                autoFocus
                className={classes.inputField}
                {...register("email")}
              />
              <p className={classes.errorMessage}>
                {errors.email && errors.email?.message}
              </p>

              <TextField
                fullWidth
                required
                id="password"
                label="password"
                {...register("password")}
                type="password"
                className={classes.inputField}
              />
              {isEmailNotFound && (
                <span
                  className={`${classes.errorMessage} ${classes.emailNotFoundMessage}`}>
                  Invalid email or password
                </span>
              )}
              <Button variant="contained" type="submit">
                Login
              </Button>
              <Grid item xs>
                <Link to="/signup">Don't have an account?, Sign up</Link>
              </Grid>
              <Typography variant="body2" color="text.secondary" align="center">
                {"Copyright © "}
                <Link
                  color="inherit"
                  to="https://github.com/niteshswarnakar/user-authentication">
                  user authentication
                </Link>
                {new Date().getFullYear()}
              </Typography>
            </form>
          </Grid>
        </Grid>
      </main>
    </>
  );
};

export default Login;
