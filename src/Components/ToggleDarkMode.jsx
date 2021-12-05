import React, { useContext } from 'react';
import { Context } from '../Context/Context';
import sol from '../Svg/sol.svg'
import lua from '../Svg/lua.svg'

export default function ToggleDarkMode() {
 const { darkMode, setDarkMode, dataTheme } = useContext(Context);

  return (
    <label className="switch">
      <button
        type="button"
        onClick={ () => setDarkMode(!darkMode) }
        data-theme={ dataTheme }
        >
        { darkMode
          ? (<img
            src={sol}
            alt="Sun icon to activate Light Mode"
            width={20}
            className="button-light"
          />)
          : (<img
              src={lua}
              alt="Moon icon to activate Dark Mode"
              width={20}
              className="button-dark"
          />)}
      </button>
    </label>
  );
}