import logo from "../utilis/logo.gif";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="">
      <div className="flex justify-between shadow-2xl rounded-lg bg-white">
        <Link to="/">
          <img
            className="p-4 hover:scale-105 duration-200"
            height={100}
            width={200}
            src={logo}
            alt="logo"
          ></img>
        </Link>
        <ul className="flex justify-evenly m-auto p-4 font-bold w-6/12">
          <div>
            <li className="hover:rounded-xl  duration-200 hover:bg-slate-300 hover:scale-110 p-1">
              <Link className="Admin" to="/admin">
                Admin
              </Link>
            </li>
          </div>
          <div>
          <li className="hover:rounded-xl duration-200 hover:bg-slate-300 hover:scale-110 p-1">
          <Link className="Financial" to="/financials">
                Financial
              </Link>
            </li>
          </div>
          <div>
          <li className="hover:rounded-xl duration-200 hover:bg-slate-300 hover:scale-110 p-1">
          <Link className="Projects" to="/projects">
                Projects
              </Link>
            </li>
          </div>
          <div>
          <li className="hover:rounded-xl duration-200 hover:bg-slate-300 hover:scale-110 p-1">
          <Link className="About" to="/about">
                About
              </Link>
            </li>
          </div>
          <div>
          <li className="hover:rounded-xl duration-200 hover:bg-slate-300 hover:scale-110 p-1">
          <Link className="FAQ" to="/faq">
                FAQ
              </Link>
            </li>
          </div>
          <div>
          <li className="hover:rounded-xl duration-200 hover:bg-slate-300 hover:scale-110 p-1">
          <Link className="Contact-us" to="/contactUs">
                Contact Us
              </Link>
            </li>
          </div>
        </ul>
        <ul className=" flex justify-start  font-bold">
          <div className="m-2 p-2">
            <Link to="/login">
              <button className="hover:scale-105 duration-200 border-2 rounded-3xl border-blue-800 py-2 px-4 hover:text-white hover:bg-blue-700">
                Login
              </button>
            </Link>
          </div>
          <div className="m-2 p-2">
            <Link to="/donate">
              <button className=" hover:scale-105 duration-200 border-2 rounded-3xl bg-blue-600 text-white  py-2 px-4 font">
                Donate
              </button>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};
