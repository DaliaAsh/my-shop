import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {
  createStyles,
  Grid,
  makeStyles,
  IconButton,
  Drawer,
  Paper,
  MenuItem,
  Avatar,
  useMediaQuery,
} from "@material-ui/core";
import useNavigation from "./useNavigation";
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: "#ec407a",
      width: "100%",
      height: "10%",
      display: "flex",
      position: "fixed",
      zIndex: 1,
    },
    shoppingCartIcon: {
      color: "white",
    },
    menuIcon: {
      color: "white",
    },
    shoppingCartIconButton: {
      marginLeft: "auto",
    },
    account: {
      width: "100%",
      backgroundColor: "#ec407a",
      padding: "1em",
    },
    drawer: {
      width: "100%",
      height: "100%",
    },
    email: {
      fontFamily: "'Caveat', cursive",
    },
    avatar: {
      color: "#ec407a",
      backgroundColor: "white",
      fontFamily: "'Caveat', cursive",
    },
    menuItem: {
      fontFamily: "'Caveat', cursive",
    },
    list: {
      textDecoration: "none",
      display: "flex",
      flexWrap: "wrap",
    },
    listItem: {
      fontFamily: "'Caveat', cursive",
      color: "white",
      transition: "all 0.5s ease-out",
      "&:hover": {
        opacity: "0.8",
        cursor: "pointer",
        transform: "translateY(-10%)",
      },
    },
    signOutItem: {
      fontFamily: "'Caveat', cursive",
      color: "white",
      position: "absolute",
      left: "95%",
      transition: "all 0.5s ease-out",
      "&:hover": {
        opacity: "0.8",
        cursor: "pointer",
        transform: "translateY(-10%)",
      },
    },
  })
);
const Navigation = () => {
  const classes = useStyles();
  const mobileOrientation = useMediaQuery("(max-width:690px)");
  const {
    toggleDrawerHandler,
    openDrawer,
    closeDrawerHandler,
  } = useNavigation();
  return (
    <Grid className={classes.root}>
      {mobileOrientation ? (
        <>
          <IconButton onClick={toggleDrawerHandler}>
            <MenuIcon className={classes.menuIcon} />
          </IconButton>
          <IconButton className={classes.shoppingCartIconButton}>
            <ShoppingCartIcon className={classes.shoppingCartIcon} />
          </IconButton>
        </>
      ) : (
        <nav>
          <ul className={classes.list}>
            <MenuItem className={classes.listItem}>
              <FavoriteIcon />
              Categories
            </MenuItem>
            <MenuItem className={classes.listItem}>
              {" "}
              <ShoppingCartIcon />
              Cart
            </MenuItem>
            <MenuItem className={classes.listItem}>
              {" "}
              <AssignmentTurnedInIcon />
              Checkout
            </MenuItem>
            <MenuItem className={classes.listItem}>
              <QuestionAnswerIcon />
              Contact Us
            </MenuItem>
            <MenuItem className={classes.listItem}>
              <ContactSupportIcon />
              Who we are?
            </MenuItem>
            <MenuItem className={classes.signOutItem}>
              <ExitToAppIcon />
            </MenuItem>
          </ul>
        </nav>
      )}
      <Drawer open={openDrawer}>
        <Grid className={classes.drawer}>
          <Grid className={classes.account}>
            <Avatar className={classes.avatar}>D</Avatar>
            <Grid className={classes.email}>daliayousef1998@yahoo.com</Grid>
          </Grid>
          <MenuItem className={classes.menuItem}>
            <AccountCircleIcon />
            Account
          </MenuItem>
          <MenuItem className={classes.menuItem}>
            <ShoppingCartIcon />
            Cart
          </MenuItem>
          <MenuItem className={classes.menuItem}>
            <AssignmentTurnedInIcon />
            Checkouts
          </MenuItem>
          <MenuItem className={classes.menuItem}>
            <LocalMallIcon />
            Bags
          </MenuItem>
          <MenuItem className={classes.menuItem}>
            <FavoriteIcon />
            Embroidery
          </MenuItem>
        </Grid>
      </Drawer>
    </Grid>
  );
};
export default Navigation;
