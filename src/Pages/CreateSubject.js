import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import SubjectTable from "../Components/SubjectTable";
import { Grid } from "@mui/material";
import { useState } from "react";

const CreateSubject = () => {
  const [formData, setFormData] = useState({
    subject: "",
    date: "",
    id: "",
  });

  const [tabData, setTabData] = useState([
    {
      subject: "abvf",
      date: "fef",
      id: 1,
    },
    {
      subject: "pqr",
      date: "dddddddddddddddd",
      id: 2,
    },
  ]);

  const handleFormEdit = (val) => {
    console.log(val);
    setFormData(val);
  };

  const handleSubmimt = () => {
    if (formData.id) {
      let allData = tabData.map((row) => {
        if (row.id === formData.id) {
          return formData;
        } else return row;
      });

      setTabData(allData);
    } else {
      let idIn = Math.floor(Math.random() * 100 + 1);
      setTabData([...tabData, { ...formData, id: idIn }]);
    }

    handleClear();
  };

  const handleTextChange = (event) => {
    var value = event.target.value;
    let d = new Date();
    let dateIn = d.toLocaleDateString();

    setFormData({
      ...formData,
      subject: value,
      date: dateIn,
    });
  };

  const handleClear = () => {
    setFormData({
      subject: "",
      date: "",
      id: "",
    });
  };

  const handleDelete = () => {
    handleClear();
  };

  return (
    <div>
      <Grid
        container
        spacing={5}
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ marginBottom: "5rem" }}
      >
        <Grid item md={12} sm={12}>
          <TextField
            id="subject"
            label="Subject"
            variant="outlined"
            onChange={handleTextChange}
            value={formData.subject}
          />
        </Grid>

        <Grid item md={2} sm={12}>
          <Button variant="contained" onClick={handleSubmimt}>
            {formData.id ? "Update" : "Add"}
          </Button>
        </Grid>

        <Grid
          item
          md={2}
          sm={12}
          sx={{ display: formData.id ? "inline" : "none" }}
        >
          <Button variant="contained" onClick={handleSubmimt} disabled={false}>
            Delete
          </Button>
        </Grid>

        <Grid
          item
          md={2}
          sm={12}
          sx={{ display: formData.id ? "inline" : "none" }}
        >
          <Button variant="contained" onClick={handleClear} disabled={false}>
            Clear
          </Button>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={5}
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ marginBottom: "5rem" }}
      >
        <Grid item md={8} xs={12}>
          <SubjectTable handleEdit={handleFormEdit} data={tabData} />
        </Grid>
      </Grid>
    </div>
  );
};

export default CreateSubject;
