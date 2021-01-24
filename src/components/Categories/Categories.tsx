import React from "react";
import CategoryModel from "../../Models/Category";
import Category from "./Category";
import im from "../../assets/images/1.jpg";
import { createStyles, makeStyles, Grid } from "@material-ui/core";
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "100%",
      height: "100%",
      display: "flex",
      paddingTop: "5em",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      "@media (max-width:600px)": {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      },
    },
  })
);
const Categories = () => {
  const classes = useStyles();
  const category: CategoryModel = {
    name: "dalia",
    price: 50,
    categoryImage: im,
  };
  return (
    <Grid className={classes.root}>
      <Category categoryDetails={category} />
      <Category categoryDetails={category} />
      <Category categoryDetails={category} />
    </Grid>
  );
};
export default Categories;
