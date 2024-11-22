import { NavLink } from "react-router-dom";
import { MdHomeFilled, MdCategory, MdShop2, MdContacts } from "react-icons/md";

const Navbar = ({ ContainerStyles }) => {

  return (
    <nav className={`${ContainerStyles}`}>
      <NavLink to={'/'}className={({isActive}) =>isActive ?  "active_link" : ""}><div className="flexCenter gap-x-1"><MdHomeFilled /><span>Home</span></div></NavLink>
      <NavLink to={'/mens'}className={({isActive}) =>isActive ?  "active_link" :"" }><div className="flexCenter gap-x-1"><MdCategory /><span>Mens</span></div></NavLink>
      <NavLink to={'/women'}className={({isActive}) =>isActive ?   "active_link" : ""}><div className="flexCenter gap-x-1"><MdShop2 /><span>Women</span></div></NavLink>
      <NavLink to={'/women'}className={({isActive}) =>isActive ? "active_link" : ""}><div className="flexCenter gap-x-1"><MdShop2 /><span>Women</span></div></NavLink>
      <NavLink to={'/kids'}className={({isActive}) =>isActive ?  "active_link" : ""}><div className="flexCenter gap-x-1"><MdContacts /><span>Kids</span></div></NavLink>
    </nav>
  )
}


export default Navbar;