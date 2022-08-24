import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  title: {
    text: "",
  },
  chart: {
    type: "areaspline",
  },
  xAxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  legend: {
    layout: "horizantial",
    align: "right",
    display: "flex",
    verticalAlign: "top",
    x: -90,
    y: 10,
    floating: true,
    borderWidth: 0,
    backgroundColor: "#FFFFFF",
  },
  series: [
    {
      name: "open Inspections",
      color: "#C6CEFF",
      data: [20, 23, 47, 40, 68, 45, 50, 30, 40, 50, 36, 30],
    },
    {
      name: "close Inspection",
      color: "#258BD6",
      data: [25, 9, 17, 15, 28, 20, 48, 40, 26, 30, 10, 30],
    },
  ],
};
const date = ["All", "1M", "6M", "1Y"];
const Graph = () => {
  return (
    <div className="w-full py-2 xl:w-full">
      <div className="flex justify-between">
        <div className="text-xl font-bold tracking-wide Montserrat">
          Analytics
        </div>
        <div className="grid grid-cols-4 gap-4">
          {date.map((item, index: number) => (
            <div
              key={index}
              className="bg-[#EFF2F7] py-1 px-2 rounded font-normal font-400 text-[11px]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 h-80 -z-50">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
};
export default Graph;
