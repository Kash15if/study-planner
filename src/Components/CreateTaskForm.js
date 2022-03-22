// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Grid from "@mui/material/Grid";
// import Button from "@mui/material/Button";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import { useState } from "react";
// import { Checkbox } from "@mui/material";
// import { FormGroup } from "@mui/material";
// import { FormControlLabel } from "@mui/material";

// import { Typography } from "@mui/material";

// const AdminPage = () => {
//   const [age, setAge] = useState("");

//   const handleChange = (event) => {
//     setAge(event.target.value);
//     console.log(age);
//   };

//   return (
//     <div>
//       <Grid
//         container
//         spacing={2}
//         direction="row"
//         justifyContent="space-around"
//         alignItems="center"
//         mt={3}
//       >
//         <Grid item sm={6} xs={10}>
//           <Grid container spacing={2}>
//             <FormControl fullWidth>
//               <InputLabel id="demo-simple-select-helper-label">
//                 Paid by
//               </InputLabel>
//               <Select
//                 labelId="demo-simple-select-helper-label"
//                 id="demo-simple-select-helper"
//                 value=""
//                 label="Paid By"
//                 onChange={handleChange}
//               >
//                 <MenuItem value="">
//                   <em>None</em>
//                 </MenuItem>
//                 <MenuItem value="azarul">Azrul</MenuItem>
//                 <MenuItem value="kashif">Kashif</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>

//           <Grid item sm={6} xs={12}>
//             <FormGroup>
//               <FormControlLabel
//                 control={<Checkbox defaultChecked color="success" />}
//                 label="Paid For Both"
//               />
//             </FormGroup>
//           </Grid>

//           <Grid item sm={12} xs={12}>
//             <Button
//               variant="contained"
//               color="success"
//               component="span"
//               size="large"
//             >
//               Add
//             </Button>
//           </Grid>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default AdminPage;

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDatePicker from "@mui/lab/MobileDatePicker";

import SubTaskAcc from "../CustomComponents/SubTasksAccordian";

export default function HelperTextMisaligned(props) {
  const [task, setTask] = useState({
    subject: "",
    task: "",
    description: "",
    fromdate: "",
    todate: "",
  });

  const onInputChange = (e) => {
    var { id, value } = e.target;

    let _task = {
      ...task,
      [id]: value,
    };

    console.log(_task);
    setTask(_task);
  };

  const onSelectChange = (e) => {
    const { name, value } = e.target;

    let _task = {
      ...task,
      [name]: value,
    };

    console.log(_task);
    setTask(_task);
  };

  const onFromDateChange = (e) => {
    let d = new Date(e);
    let date = d.toLocaleDateString();

    let _task = {
      ...task,
      fromdate: date,
    };

    console.log(_task);

    setTask(_task);
  };
  const onToDateChange = (e) => {
    let d = new Date(e);
    let date = d.toLocaleDateString();

    let _task = {
      ...task,
      todate: date,
    };

    console.log(_task);

    setTask(_task);
  };

  const AddTaskBtn = () => {
    console.log(task);
  };

  return (
    <Box textAlign="left" p={6}>
      {/* <Grid container justifyContent="space-between" spacing={2}>
        <Grid item xs={7}> */}
      <Grid container justifyContent="space-between" spacing={3.5}>
        <Grid item sm={6} xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-helper-label">
              Subject
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="Subject"
              name="subject"
              onChange={onSelectChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"0"}>Ten</MenuItem>
              <MenuItem value={"20"}>Twenty</MenuItem>
              <MenuItem value={"30"}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            fullWidth
            // helperText="Please enter your topic"
            id="task"
            label="Task"
            onChange={onInputChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="description"
            fullWidth
            label="Description"
            variant="outlined"
            onChange={onInputChange}
          />
        </Grid>

        <Grid item sm={4} xs={12}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MobileDatePicker
              label="From Date"
              inputFormat="yyyy/MM/dd"
              onChange={onFromDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>

        <Grid item sm={4} xs={12}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MobileDatePicker
              label="Date mobile"
              inputFormat="yyyy/MM/dd"
              value={"2021-01-01"}
              onChange={onToDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>

        <Grid item sm={4} xs={12}></Grid>

        <Grid item sm={6} xs={12}>
          <Button
            variant="contained"
            component="span"
            size="large"
            onClick={AddTaskBtn}
          >
            Add
          </Button>
        </Grid>
      </Grid>

      {/* </Grid>
        <Grid item xs={5}></Grid>
      </Grid> */}

      {/* <Grid container justifyContent="space-around" spacing={3.5} mt={10}>
        <Grid item sm={4} xs={12}>
          <Button variant="contained">Add subtasks +</Button>
        </Grid>
      </Grid>

      <Grid container justifyContent="space-around" spacing={1} mt={10}>
        <Grid item sm={6} xs={12}>
          <SubTaskAcc />
        </Grid>

        <Grid item sm={6} xs={12}>
          <SubTaskAcc />
        </Grid>

        <Grid item sm={6} xs={12}>
          <SubTaskAcc />
        </Grid>

        <Grid item sm={6} xs={12}>
          <SubTaskAcc />
        </Grid>
      </Grid> */}
    </Box>
  );
}
