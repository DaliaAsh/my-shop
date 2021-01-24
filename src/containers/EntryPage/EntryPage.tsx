import React from "react";
import {
  makeStyles,
  createStyles,
  FormControl,
  FormHelperText,
  TextField,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import useEntryPage from "./useEntryPage";
import AnimatedEntry from "../../components/AnimatedEntry";
import EmbroideryCarousal from "../../components/EmbroideryCarousal";
import image1 from "../../assets/images/1.jpg";
import image2 from "../../assets/images/2.jpg";
import image3 from "../../assets/images/3.jpg";
import image4 from "../../assets/images/4.jpg";
import image5 from "../../assets/images/5.jpg";
const useStyles = makeStyles(() =>
  createStyles({
    mainRoot: {
      width: "100%",
      height: "100vh",
      overflow: "auto",
      display: "flex",
      justifyContent: "flex-end",
      overflowY: "hidden",
      "@media (max-width:900px)": {
        justifyContent: "center",
        overflowY: "auto",
      },
    },
    form: {
      width: "30%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      padding: "2em",
      "@media (max-width:900px)": {
        width: "100%",
      },
    },
    header: {
      textAlign: "center",
      fontFamily: "'Caveat', cursive",
      color: "#ce009f",
    },
    link: {
      marginBottom: "20%",
      fontFamily: "'Caveat', cursive",
      color: "#ce009f",
      textAlign: "center",
    },
    submitButton: {
      fontFamily: "'Caveat', cursive",
      backgroundColor: "#ce009f",
      color: "white",
    },
    input: {
      "&::placeholder": { fontFamily: "'Caveat', cursive", color: "#ce009f" },
    },
    carousalContainer: {
      width: "60%",
      paddingTop: "10%",
      "@media (max-width:900px)": {
        display: "none",
      },
    },
  })
);
const EntryPage = (props) => {
  const {
    display,
    checked,
    emailRef,
    passwordRef,
    handleSignIn,
    handleChangePassword,
    hint,
  } = useEntryPage();
  const classes = useStyles();
  if (display === "inline") {
    return <AnimatedEntry checked={checked} />;
  }
  let slides = [
    <img src={image1} alt="1" />,
    <img src={image2} alt="2" />,
    <img src={image3} alt="3" />,
    <img src={image4} alt="4" />,
    <img src={image5} alt="5" />,
  ];
  return (
    <div className={classes.mainRoot}>
      <div className={classes.carousalContainer}>
        <EmbroideryCarousal slides={slides} />
      </div>
      <form className={classes.form} onSubmit={(event) => handleSignIn(event)}>
        <h1 className={classes.header}>Sign In</h1>
        <TextField
          placeholder="E-mail"
          inputProps={{ classes: { input: classes.input } }}
          inputRef={emailRef}
          type="email"
        />
        <FormControl>
          <TextField
            placeholder="Password"
            type="password"
            className={classes.input}
            inputRef={passwordRef}
            onChange={() => handleChangePassword(passwordRef.current.value)}
          />
          <FormHelperText>{hint}</FormHelperText>
        </FormControl>

        <Button type="submit" className={classes.submitButton}>
          Submit
        </Button>
        <Link className={classes.link} to="/sign-up">
          Don't have an account , Sign Up!
        </Link>
      </form>
    </div>
  );
};
export default EntryPage;
