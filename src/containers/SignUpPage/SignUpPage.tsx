import React from "react";
import {
  makeStyles,
  createStyles,
  OutlinedInput,
  Button,
  Grid,
} from "@material-ui/core";
import mobileBackground from "../../assets/images/mobile.png";
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "100%",
      height: "100vh",
      justifyContent: "center",
      display: "flex",
      alignItems: "center",
      overflowY: "hidden",
      background:
        "linear-gradient(to left, #e91145, #ea1259 39%, #ea125b 41%, #ec1375 55% , #ee149d 99%)",
      "@media (max-width:600px)": {
        backgroundImage: `url(${mobileBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        overflowY: "hidden",
      },
    },
    form: {
      width: "35%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "1em",
      backgroundColor: "white",
      "@media (max-width:600px)": {
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
      },
    },
    formContainer: {
      display: "flex",
      flexDirection: "column",
      width: "80%",
      height: "100%",
      padding: "5em",
      "@media (max-width:600px)": {
        marginTop: "50%",
        padding: 0,
      },
    },
    submitButton: {
      backgroundColor: "#ce009f",
      color: "white",
      fontFamily: "'Caveat', cursive",
    },
    input: {
      marginBottom: "1.5em",
      boxShadow: "0px 0px 15px 0px #ccc",
    },
    header: {
      color: "#ce009f",
      fontFamily: "'Caveat', cursive",
    },
  })
);
const SignUpPage = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <form className={classes.form}>
        <Grid className={classes.formContainer}>
          <h1 className={classes.header}>Sign Up</h1>
          <OutlinedInput placeholder="User Name" className={classes.input} />
          <OutlinedInput placeholder="E-Mail" className={classes.input} />
          <OutlinedInput placeholder="Password" className={classes.input} />
          <Button className={classes.submitButton} type="submit">
            Sign Up
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};
export default SignUpPage;
