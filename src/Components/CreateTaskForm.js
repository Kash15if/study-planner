import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { Checkbox } from "@mui/material";
import { FormGroup } from "@mui/material";
import { FormControlLabel } from "@mui/material";

import { Typography } from "@mui/material";

const AdminPage = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(age);
  };

  return (
    <div>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        mt={3}
      >
        <Grid item sm={6} xs={10}>
          <Grid container spacing={2}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-helper-label">
                Paid by
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value=""
                label="Paid By"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="azarul">Azrul</MenuItem>
                <MenuItem value="kashif">Kashif</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item sm={6} xs={12}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked color="success" />}
                label="Paid For Both"
              />
            </FormGroup>
          </Grid>

          <Grid item sm={12} xs={12}>
            <Button
              variant="contained"
              color="success"
              component="span"
              size="large"
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminPage;
