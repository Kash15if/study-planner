import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

export default function HelperTextMisaligned() {
  return (
    <Box textAlign="left">
      <Grid container justifyContent="space-around" spacing={2}>
        <Grid item xs={5}>
          <TextField
            fullWidth
            helperText="Please enter your name"
            id="demo-helper-text-misaligned"
            label="Name"
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            fullWidth
            helperText="Please enter your name"
            id="demo-helper-text-misaligned"
            label="Name"
          />
        </Grid>

        <Grid item xs={11}>
          <TextField
            id="outlined-basic"
            fullWidth
            label="Outlined"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={5}>
          <TextField
            id="outlined-basic"
            fullWidth
            label="Outlined"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={5}>
          <TextField
            id="outlined-basic"
            fullWidth
            label="Outlined"
            variant="outlined"
          />
        </Grid>
      </Grid>

      <Button variant="contained" component="span">
        Upload
      </Button>
    </Box>
  );
}
