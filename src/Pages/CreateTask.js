import CreateTask from "../Components/CreateTaskForm";
import EditableTable from "../CustomComponents/EditableTable";
import SubTaskTable from "../CustomComponents/CRUD-pr-table";
import { Grid } from "@mui/material";

import { useState, useEffect } from "react";

const CreateNewTask = ({ tasksFromDb, subTasksListsFromDb }) => {
  const [subjectsList, setSubjectsList] = useState(null);

  const [subTasks, setSubTasks] = useState([]);
  const [task, setTask] = useState({
    uid: "aab55780-6e20-11ec-9569-0ef4b0d5e5d1",
    completed: false,
    precentComp: Math.random() * 100,
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

  // useEffect(() => {
  //   fetch(
  //     "http://localhost:3000/get/subtask/34c8e55e-7312-426c-87b1-030beeb796b4"
  //   )
  //     .then((res) => res.json())
  //     .then((dataX) => {
  //       setSubTasks(dataX);
  //     });
  // }, []);

  useEffect(() => {
    if (tasksFromDb) {
      setTask(tasksFromDb);
    }

    if (subTasksListsFromDb) {
      setSubjectsList(subTasksListsFromDb);
    }
  }, []);

  const addTaskToDb = async () => {
    console.log(task);
    console.log(subTasks);
    //data to be pushed on db

    const response = await fetch(
      process.env.REACT_APP_BASE_URL_POST + "/newtask",
      {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
          taskDets: task,
          subTasks: subTasks,
        }), // body data type must match "Content-Type" header
      }
    );

    await setEmptyTaskAndSubTask();
    console.log(response);
    return response;
  };

  const setEmptyTaskAndSubTask = () => {
    setTask({
      uid: "",
      completed: false,
      precentComp: Math.random() * 100,
      subject: "",
      subid: "",
      task: "",
      description: "",
      fromdate: "",
      todate: "",
    });

    setSubTasks([]);
  };

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
