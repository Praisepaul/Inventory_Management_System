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
    </div>
  )
}

export default ContentMain
