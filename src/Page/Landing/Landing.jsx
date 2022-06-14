import { Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  btn: {
    marginTop: "20px",
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
          </Grid>
          <Grid item xs={6} className={classes.btn}>
            <img src="./assets/social.jpg" alt="" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export { Landing };
