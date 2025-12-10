import logo from "./assets/logo.png";
import { MdOutlineDashboard } from "react-icons/md";
import { IoMailOutline, IoCalendarClearOutline } from "react-icons/io5";
import { LuTruck } from "react-icons/lu";
import { TbReportSearch } from "react-icons/tb";

function App() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="treehouse logo" /> 
      </div>
      <ul>
        <li className="li-active">
          <MdOutlineDashboard size={26} color="#67b569" />
          <p>Dashboard</p> 
        </li>
        <li>
          <IoMailOutline size={26} color="#3b3b3b" /> 
          <p>Products</p>
        </li>
        <li>
          <IoCalendarClearOutline size={26} color="#3b3b3b" />
          <p>Calendars</p>
        </li>
        <li>
          <LuTruck size={26} color="#3b3b3b" />
          <p>Suppliers</p>
        </li>
        <li>
          <TbReportSearch size={26} color="#3b3b3b" />
          <p>Reports</p>
        </li>
      </ul>
    </div>
  )
}

export default App
