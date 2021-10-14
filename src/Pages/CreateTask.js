import CreateTask from "../Components/CreateTaskForm";
import EditableTable from "../CustomComponents/EditableTable";

const CreateNewTask = () => {
  return (
    <div>
      <CreateTask />

      <EditableTable />
    </div>
  );
};

export default CreateNewTask;
