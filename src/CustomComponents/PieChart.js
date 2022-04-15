import Chart from "react-google-charts";

const PieChart = (props) => {
  return (
    <Chart
      width={"100%"}
      height={"100%"}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={props.data}
      options={{
        backgroundColor: "#192735",
        chartArea: {
          left: "5%",
          top: "5%",
          height: "90%",
          width: "90%",
        },
        colors: ["#00E676", "#29B6F6", "#F50057", "#FBC02D"],
        title: props.title,
        // Just add this option
        pieHole: 0.4,
        titleTextStyle: {
          color: "#BB86FC",
        },
        legend: { textStyle: { color: "#BB86FC" } },
      }}
      rootProps={{ "data-testid": "3" }}
    />
  );
};

export default PieChart;
