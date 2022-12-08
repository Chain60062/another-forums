import { FunctionComponent } from "react";
import { MenuIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

export const NavBar: FunctionComponent = () => {
  return (
    <nav className="bg-emerald-500 border-gray-200 px-2 sm:px-4 py-2 rounded-b-sm rounded-bl- dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/login" className="flex items-center">
          Home
        </Link>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          -
          <MenuIcon />
        </button>
        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col md:flex-row md:space-x-2 md:text-sm md:font-medium">
            <NavBarLink text="about" path="/about" />
            <NavBarLink text="services" />
          </ul>
        </div>
      </div>
    </nav>
  );
};
interface Props {
  text: string;
  path?: string; //optional path, if no value is given it defaults to text value
}
const NavBarLink = (props: Props) => {
  return (
    <li>
      <Link
        to={props.path ? props.path : `/${props.text}`}
        className="block p-1 pr-2 pl-2 m-0 text-gray-700 md:hover:text-emerald-300 md:hover:bg-slate-800 rounded-lg"
      >
        {props.text}
      </Link>
    </li>
  );
};
