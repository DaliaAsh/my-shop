import React from "react";
import { makeStyles, createStyles, Grow } from "@material-ui/core";
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: "100vh",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
    },
    header: {
      alignSelf: "center",
      letterSpacing: "0.2em",
      fontSize: "5em",
      fontFamily: "'Caveat', cursive",
      color: "#ce009f",
      "@media (max-width:600px)": {
        fontSize: "3em",
      },
    },
    subHeader: {
      alignSelf: "center",
      letterSpacing: "0.2em",
      fontSize: "3em",
      fontFamily: "'Yusei Magic', sans-serif",
      color: "#ce009f",
      "@media (max-width:600px)": {
        fontSize: "1.5em",
      },
    },
  })
);
interface AnimatedEntryProps {
  checked: boolean;
}
const AnimatedEntry = (props: AnimatedEntryProps) => {
  const classes = useStyles();
  const { checked } = props;
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Grow in={checked}>
          <span>D</span>
        </Grow>
        <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 1000 } : {})}
        >
          <span>e</span>
        </Grow>
        <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 2000 } : {})}
        >
          <span>e</span>
        </Grow>
        <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 3000 } : {})}
        >
          <span>m</span>
        </Grow>
        <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 4000 } : {})}
        >
          <span>a'</span>
        </Grow>
        <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 4000 } : {})}
        >
          <span>s</span>
        </Grow>
      </div>
      <div className={classes.subHeader}>
        <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 5000 } : {})}
        >
          <span>C</span>
        </Grow>
        <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 6000 } : {})}
        >
          <span>O</span>
        </Grow>
        <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 7000 } : {})}
        >
          <span>L</span>
        </Grow>
        <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 8000 } : {})}
        >
          <span>L</span>
        </Grow>
        <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 9000 } : {})}
        >
          <span>E</span>
        </Grow>
        <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 10000 } : {})}
        >
          <span>C</span>
        </Grow>
        <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 11000 } : {})}
        >
          <span>T</span>
        </Grow>
        <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 12000 } : {})}
        >
          <span>I</span>
        </Grow>
        <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 13000 } : {})}
        >
          <span>O</span>
        </Grow>
        <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 14000 } : {})}
        >
          <span>N</span>
        </Grow>
      </div>
    </div>
  );
};
export default AnimatedEntry;
