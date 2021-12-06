import React from 'react';
import { routes } from '../Services/Routes';
import { Link } from 'react-router-dom';
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import coracao from '../Svg/coracao-dark.svg';
import brain from '../Svg/brain-svgrepo-com.svg';
import Image from '../Components/Image';

const Navbar = () => {
  return (
    <div className="nav">
      <ProSidebar>
        <SidebarHeader>
          <div className="div-avatar">
            <Image />
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu>
            {routes.map((route, index) => (
              <MenuItem
                key={ index }
                icon={ 
                  <img className="menu-item-color"
                    alt={ `Icon corresponding to ${route.name } button.` }
                    src={ route.icon }
                  />
                }
              >
                <Link to={ route.path }>{ route.name }</Link>
              </MenuItem>
            ))}
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <small>
            ©{new Date().getFullYear()} made with { <img className="heart" src={coracao} alt="heart"/>} by Lucas Lima, using { <img className="brain" src={brain} alt="brain"/>} and React.js.
          </small>
        </SidebarFooter>
      </ProSidebar>
    </div>
  )
};

export default Navbar;
