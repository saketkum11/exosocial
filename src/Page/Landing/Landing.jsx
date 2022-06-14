import { Container, Grid, Typography } from "@mui/material";

const useStyles = makes;

const Landing = () => {
  const classes = useStyles();
  return (
    <>
      <Container>
        <Grid container>
          <Grid item xs variant="">
            <Typography>ExoSocial</Typography>
          </Grid>
          <Grid item xs={6}>
            <div>
              <img src="./assets/social.jpg" alt="" />
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export { Landing };
