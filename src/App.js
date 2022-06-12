import "./App.css";
import logo from "./logo.png";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <div className="App">
      <Button variant="contained" color="secondary">
        material
      </Button>
      <Grid container spacing={3}>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>xs=6</Item>
        </Grid>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
