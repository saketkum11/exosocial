import { Button, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  btn: {
    marginTop: "20px",
    height: "100vh",
  },
  board: {
    marginTop: "290",
  },
});

const Landing = () => {
  const classes = useStyles();
  return (
    <>
      <Container>
        <Grid container className={classes.board} spacing={3}>
          <Grid item xs className={classes.btn}>
            <Typography fontSize="3rem">ExoSocial</Typography>
            <Typography fontSize="3rem">ExoSocial</Typography>
            <Typography fontSize="3rem">ExoSocial</Typography>
            <Button variant="contained" color="secondary">
              Create Account
            </Button>
          </Grid>
          <Grid item xs={6} className={classes.btn} width="100%">
            <img src="./assets/social.jpg" alt="" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export { Landing };
