import React from "react";
import CategoryModel from "../../Models/Category";
import {
  Grid,
  Paper,
  createStyles,
  makeStyles,
  Button,
} from "@material-ui/core";
import Image from "material-ui-image";

interface CategoryProps {
  categoryDetails: CategoryModel;
}
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "20%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      margin: "1em",
      boxShadow: "1px 1px 15px 1px #eee",
      "@media (max-width:600px)": { width: "70%" },
      "&:hover": {
        cursor: "pointer",
        opacity: "0.5",
      },
    },
    categoryDetailsContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "'Caveat', cursive",
    },
    imageGrid: {
      width: "100%",
      margin: "auto",
    },
    addButton: {
      backgroundColor: "#1877f2",
      color: "white",
      textTransform: "none",
      fontFamily: "'Caveat', cursive",
      fontWeight: "bold",
      "&:hover": {
        backgroundColor: "#1877f2",
        color: "white",
      },
    },
  })
);
const Category = (props: CategoryProps) => {
  const { categoryDetails } = props;
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Grid className={classes.imageGrid}>
        <Image src={categoryDetails.categoryImage} aspectRatio={16 / 9} />
      </Grid>

      <Grid className={classes.categoryDetailsContainer}>
        <Grid>{categoryDetails.name}</Grid>
        <Grid>{categoryDetails.price}$</Grid>
        <Button className={classes.addButton}>Add To Cart</Button>
      </Grid>
    </Grid>
  );
};
export default Category;
