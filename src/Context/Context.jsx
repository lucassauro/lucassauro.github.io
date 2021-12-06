import { createContext, useState } from 'react';
import useLocalStorage from '../Helpers/useLocalStorage';

export const Context = createContext()

export default function Provider({children}) {
  const [ dM, setDM ] = useLocalStorage("darkMode", false);
  const [ dataTheme, setDataTheme ] = useState('');

  const value = {
    dM,
    setDM,
    dataTheme,
    setDataTheme,
  }

  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  );
}


