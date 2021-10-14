import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import SubjectTable from "../CustomComponents/EditableTable";

const CreateSubject = () => {
  return (
    <div>
      <TextField id="outlined-basic" label="Subject" variant="outlined" />
      <Button variant="contained" size="large">
        Add Subject
      </Button>

      <SubjectTable />
    </div>
  );
};

export default CreateSubject;
