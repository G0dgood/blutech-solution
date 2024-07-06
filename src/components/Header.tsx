import { FaChevronDown } from "react-icons/fa6";
import profile from "../img/Maskgroup.png"
import Bell from "../img/Bell.png"
import logo from "../img/logo.png"
import HeaderSearch from "./HeaderSearch";


const Header = () => {

  return (
    <div id="header">
      <div className='dashboard-first-card-boards'>
        <img src={logo} alt='logo' />
        <HeaderSearch placeholder={"Search by patients..."} />
      </div>
      <div className='FaPlus-icon-container' >
        <div className='faplus-bell_container'>
          <div className='profiledropdown_container'>
            <img src={Bell} alt='Bell' className="avata_img" />
            <span className='FaPlus-name'>
              <img src={profile} alt='profile' className="avata_img" />
            </span>
            <div>
              <p className='profiledropdown_container_p'>Deko</p>
            </div>
            <FaChevronDown />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;




