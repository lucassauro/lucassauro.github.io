import { createContext, useState } from 'react';

export const Context = createContext()

export default function Provider({children}) {
  const [ darkMode, setDarkMode ] = useState(false);
  const [ dataTheme, setDataTheme ] = useState('');

  const value = {
    darkMode,
    setDarkMode,
    dataTheme,
    setDataTheme,
  }

  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  );
}


