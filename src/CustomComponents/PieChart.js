import Chart from "react-google-charts";

const PieChart = () => {
  return (
    <Chart
      width={"100%"}
      height={"100%"}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={[
        ["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7],
      ]}
      options={{
        backgroundColor: "#192735",
        chartArea: {
          left: "5%",
          top: "5%",
          height: "90%",
          width: "90%",
        },
        title: "My Daily Activities",
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
