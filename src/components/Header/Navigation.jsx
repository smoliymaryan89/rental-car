import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul className="flex items-center gap-[20px]">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "text-hover text-[16px] font-semibold"
                : "text-primary text-[16px] font-semibold transition-all duration-350 hover:text-hover "
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/catalog"}
            className={({ isActive }) =>
              isActive
                ? "text-hover text-[16px] font-semibold"
                : "text-primary text-[16px] font-semibold transition-all duration-350 hover:text-hover"
            }
          >
            Catalog
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favorites"}
            className={({ isActive }) =>
              isActive
                ? "text-hover text-[16px] font-semibold"
                : "text-primary text-[16px] font-semibold transition-all duration-350 hover:text-hover"
            }
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
