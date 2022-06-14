import { AppBar, Toolbar } from "@mui/material";

const useStyle = (theme) => ({
  toolkit: {
    backgroundcolor: theme.palette.primary.main,
  },
});
const NavBar = () => {
  const classes = useStyle();
  return (
    <>
      <AppBar variant="contained" color="secondary" className={classes.toolkit}>
        <Toolbar></Toolbar>
      </AppBar>
    </>
  );
};
export { NavBar };
