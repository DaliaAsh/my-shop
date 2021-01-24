import React from "react";
import { Grid } from "@material-ui/core";
import Navigation from "../../components/Navigation/Navigation";
import Categories from "../../components/Categories/Categories";
const MainPage = () => {
  return (
    <Grid>
      <Navigation />
      <Categories />
    </Grid>
  );
};
export default MainPage;
