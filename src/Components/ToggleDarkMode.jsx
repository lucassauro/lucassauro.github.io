import React, { useContext } from 'react';
import { Context } from '../Context/Context';
import Sun from '../Svg/sol.svg'
import Moon from '../Svg/lua.svg'

export default function ToggleDarkMode() {
 const { dM, setDM, dataTheme } = useContext(Context);

  return (
    <label className="switch">
      <button
        type="button"
        onClick={ () => setDM(!dM) }
        data-theme={ dataTheme }
        >
        { dM
          ? (<img
            src={ Sun }
            alt="Sun icon to activate Light Mode"
            width={ 20 }
            className="button-light"
            title="Toggle LightMode persistent"
          />)
          : (<img
              src={ Moon }
              alt="Moon icon to activate Dark Mode"
              width={ 20 }
              className="button-dark"
              title="Toggle DarkMode persistent"
          />)}
      </button>
    </label>
  );
}