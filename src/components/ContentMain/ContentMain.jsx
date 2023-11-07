import "./ContentMain.css";
import Stocks from "../Stocks/Stocks";
import Orders from "../Orders/Orders";
import {
  PieChart,
  Pie,
  Tooltip,
} from "recharts";

const ContentMain = () => {

  const data = [
    { name: "A", users: 20 },
    { name: "B", users: 15 },
    { name: "C", users: 10 },
    { name: "D", users: 50 },
  ];

  return (
    <div className="main-content-holder">
        <div className="content-grid-two">
            <Stocks />
            <Orders />
        </div>

        <div className="content-grid-one">
          <center>
            <PieChart width={400} height={400}>
              <Pie
                dataKey="users"
                isAnimationActive={false}
                data={data}
                cx={200}
                cy={200}
                outerRadius={80}
                fill="#8884d8"
                label
              />
              <Tooltip />
            </PieChart>
          </center>
        </div>
    </div>
  )
}

export default ContentMain
