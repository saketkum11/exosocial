import { Grid, Typography } from "@mui/material";

const Landing = () => {
  return (
    <>
      <Grid container>
        <Grid item xs variant="">
          <div xs={{ color: "primary" }}>
            {" "}
            <Typography variant="h3">ExoSocial</Typography>
          </div>
          <div>
            {" "}
            <Typography variant="h3">ExoSocial</Typography>
          </div>
          <div>
            {" "}
            <Typography variant="h3">ExoSocial</Typography>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div>
            <img src="./assets/social.jpg" alt="" />
          </div>
        </Grid>
      </Grid>
    </>
  );
};
export { Landing };
