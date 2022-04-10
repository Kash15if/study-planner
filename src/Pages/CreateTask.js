import CreateTask from "../Components/CreateTaskForm";
import EditableTable from "../CustomComponents/EditableTable";
import SubTaskTable from "../CustomComponents/CRUD-pr-table";
import { Grid } from "@mui/material";

import { useState, useEffect } from "react";

const CreateNewTask = ({ tasksFromDb, subTasksListsFromDb }) => {
  const [subjectsList, setSubjectsList] = useState(null);

  const [subTasks, setSubTasks] = useState(null);

  const addTaskToDb = () => {
    console.log(task);
    //data to be pushed on db
  };

  const [task, setTask] = useState({
    uid: "",
    completed: false,
    precentComp: "",
    subject: "",
    subid: "",
    task: "",
    description: "",
    fromdate: "",
    todate: "",
  });
  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_URL_GET + "/allsubject")
      .then((res) => res.json())
      .then((dataX) => {
        setSubjectsList(dataX);
      });
  }, []);

  useEffect(() => {
    fetch(
      "http://localhost:3000/get/subtask/34c8e55e-7312-426c-87b1-030beeb796b4"
    )
      .then((res) => res.json())
      .then((dataX) => {
        setSubTasks(dataX);
      });
  }, []);

  useEffect(() => {
    if (tasksFromDb) {
    }
  }, []);

  return (
    <div>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item md={10} xs={12}>
          <CreateTask
            subjectsList={subjectsList}
            task={task}
            setTask={setTask}
            addTaskToDb={addTaskToDb}
          />
        </Grid>

        <Grid item md={10} xs={12} sx={{ width: "90vw" }}>
          <SubTaskTable subTasks={subTasks} setSubTasks={setSubTasks} />
        </Grid>
      </Grid>
    </div>
  );
};

export default CreateNewTask;
