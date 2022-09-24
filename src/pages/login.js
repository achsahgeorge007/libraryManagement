import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import { Formik } from "formik";
import * as Yup from "yup";
import Tools from "../tools/tools";

function LoginPage() {
  const navigate = useNavigate();

  return (

    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ maxHeight: "50vh" }}
      sx={{
        marginY: "10%",
      }}
    >
      <Grid item xs={3}>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, { setSubmitting }) => {
            console.log("afaffaf");
            setTimeout(() => {
              console.log("Logging in", values);
              Tools().storeToken(values);
              navigate("/home");
              setSubmitting(false);
            }, 500);
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string().email().required("Email Required"),
            password: Yup.string()
              .required("No password provided.")
              .min(8, "Password is too short min 8 chars.")
              .matches(/(?=.*[0-9])/, "Password must contain a number."),
          })}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
            } = props;
            return (
              <Card elevation={3} variant="elevation" sx={{ padding: "2%" }}>
                <form onSubmit={handleSubmit}>
                  <Typography
                    gutterBottom
                    variant="h4"
                    textAlign="center"
                    component="div"
                  >
                    LOGIN
                  </Typography>
                  <CardContent>
                    <TextField
                      name="email"
                      label="Email"
                      type="text"
                      placeholder="Enter your email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      sx={{
                        marginY: "1%",

                        width: "100%",
                      }}
                      error={errors.email && touched.email ? true : false}
                      helperText={
                        errors.email && touched.email
                          ? errors.email
                          : "Please Enter Your email "
                      }
                      className={errors.email && touched.email && "error"}
                    />
                    <TextField
                      name="password"
                      label="password"
                      type="password"
                      placeholder="Enter your password"
                      value={values.password}
                      sx={{
                        marginY: "1%",
                        width: "100%",
                      }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.password && touched.password ? true : false}
                      helperText={
                        errors.password && touched.password
                          ? errors.password
                          : "Please Enter Your password "
                      }
                      className={errors.password && touched.password && "error"}
                    />
                  </CardContent>
                  <CardActions>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ width: "100%", marginBottom: "2%" }}
                      disabled={
                        errors.email || errors.password || isSubmitting
                          ? true
                          : false
                      }
                    >
                      Submit
                    </Button>
                  </CardActions>
                </form>
              </Card>
            );
          }}
        </Formik>
      </Grid>
    </Grid>
  );
}

export default LoginPage;
