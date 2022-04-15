import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import SubjectTable from "../Components/SubjectTable";
import { Grid } from "@mui/material";
import { useState, useEffect } from "react";

const CreateSubject = () => {
  const [formData, setFormData] = useState({
    subject: "",
    date: "",
    id: "",
  });

  const [tabData, setTabData] = useState(null);

  const handleClear = () => {
    setFormData({
      subject: "",
      date: "",
      id: "",
    });

    // console.log(formData);
  };

  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_URL_GET + "/allsubject")
      .then((res) => res.json())
      .then((dataX) => {
        setTabData(dataX);
      });
  }, []);

  const handleFormEdit = (val) => {
    console.log(val);
    setFormData(val);
  };

  const handleSubmimt = async () => {
    if (formData.id) {
      let allData = tabData.map((row) => {
        if (row.id === formData.id) {
          return formData;
        } else return row;
      });

      setTabData(allData);

      const response = await fetch(
        process.env.REACT_APP_BASE_URL_POST + "/updatesubject",
        {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      await handleClear();
      return response.json();
    } else {
      let idIn = Math.floor(Math.random() * 100 + 1);
      setTabData([...tabData, { ...formData, id: idIn }]);

      const response = await fetch(
        process.env.REACT_APP_BASE_URL_POST + "/newsubject",
        {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      await handleClear();
      return response.json();
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

  const handleDelete = async () => {
    const response = await fetch(
      process.env.REACT_APP_BASE_URL_POST + "/delsubject",
      {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    console.log(response);

    const alltasks = await tabData.filter((row) => row.id !== formData.id);

    setTabData(alltasks);

    await handleClear();

    return response.json();
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
          <Button variant="contained" onClick={handleDelete} disabled={false}>
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
        {tabData && (
          <Grid item md={10} xs={12}>
            <SubjectTable handleEdit={handleFormEdit} data={tabData} />
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default CreateSubject;
