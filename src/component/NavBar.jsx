import { AppBar, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { green, purple } from "@mui/material/colors";

const useStyle = makeStyles({
  toolkit: {
    backgroundColor: "green",
  },
});

const NavBar = () => {
  const classes = useStyle();
  return (
    <>
      <AppBar className={classes.toolkit}>
        <Toolbar></Toolbar>
      </AppBar>
    </>
  );
};
export { NavBar };
