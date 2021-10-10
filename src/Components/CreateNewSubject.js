import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Table from "../CustomComponents/SortableTable";

const NewSubject = () => {
  return (
    <div>
      <Box>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Button variant="outlined">Add Subject</Button>
      </Box>
      <Box>
        <Table />
      </Box>
    </div>
  );
};

export default NewSubject;
