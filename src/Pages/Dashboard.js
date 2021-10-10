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
      <div className="graphSection"></div>
      <div className="tableSection"></div>
      <div className="calenderSection"></div>
    </div>
  );
};

export default Dashboard;
