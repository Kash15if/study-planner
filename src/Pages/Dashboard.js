import Cards from "../CustomComponents/DashboardCard";
import CalenderView from "../Components/CalenderView";
import TaskTable from "../CustomComponents/SortableTable";
import PieChart from "../CustomComponents/PieChart";

const Dashboard = () => {
  return (
    <div>
      <div className="cardSection">
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
      </div>
      <div className="graphSection">
        <PieChart />
      </div>
      <div className="tableSection">
        <CalenderView />
      </div>
      <div className="calenderSection">
        <TaskTable />
      </div>
    </div>
  );
};

export default Dashboard;
