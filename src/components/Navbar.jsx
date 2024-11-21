import { NavLink } from "react-router-dom";
import { MdHomeFilled, MdCategory, MdShop2, MdContacts } from "react-icons/md";

const Navbar = ({ ContainerStyles }) => {
  return (
    <nav className={`${ContainerStyles}`}>
      <NavLink to="/"><div className="flexCenter gap-x-1"><MdHomeFilled />Home</div></NavLink>
      <NavLink to="/mens"><div className="flexCenter gap-x-1"><MdCategory />Men's</div></NavLink>
      <NavLink to="/women"><div className="flexCenter gap-x-1"><MdShop2 />Women</div></NavLink>
      <NavLink to="/kids"><div className="flexCenter gap-x-1"><MdContacts />Kid's</div></NavLink>
    </nav>
  );
}

export default Navbar;