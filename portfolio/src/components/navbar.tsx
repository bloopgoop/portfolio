import { NavLink, NavLinkProps } from "react-router-dom";
import { cn } from "../utils/cn";

function CustomNavLink(props: NavLinkProps) {
  const { to, className, ...rest } = props;

  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) => {
        return isPending
          ? cn("pending", className, "font-bold")
          : isActive
          ? cn("active", className, "text-green-500 font-bold")
          : cn(className, "font-bold");
      }}
      {...rest}
    />
  );
}

function Navbar() {
  return (
    <nav className="top-0 left-0 fixed p-4 flex justify-center items-center w-full gap-2 z-50">
      <CustomNavLink to="/">About</CustomNavLink>
      <CustomNavLink to="/projects">Projects</CustomNavLink>
      <CustomNavLink to="/experience">Experience</CustomNavLink>
      <CustomNavLink to="/contact">Contact</CustomNavLink>
    </nav>
  );
}
export { Navbar };
