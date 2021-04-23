import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
// import { SidebarData } from './SidebarData';
import './Header.css';
import { IconContext } from 'react-icons';
import { useHistory } from "react-router-dom";

function Header() {
    const [sidebar, setSidebar] = useState(false);
    let history = useHistory();
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                    
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' >
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose onClick={showSidebar} />
                           

                            </Link>
                        </li>
                        {/* {SidebarData.map((item, index) => {
                            if (item.title === "Sign-Out") {
                                return (
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path} onClick={() => {
                                            localStorage.setItem("userData", "");
                                            history.push("/");
                                            window.location.reload(false);
                                        }}>
                                            {item.icon}
                                            <span>{item.title}</span>

                                        </Link>

                                    </li>

                                );
                            }

                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                       
                                    </Link>
                                 
                                </li>
                            
                            );
                            
                        })} */}
                    </ul>
                </nav>
          
            </IconContext.Provider>
        </>
        
    );
}

export default Header;