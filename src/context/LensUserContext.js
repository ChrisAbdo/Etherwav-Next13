import { createContext, useContext } from 'react';
import useLensUser from '../lib/auth/useLensUser';

const LensUserContext = createContext();

export default function LensUserContextProvider({ children }) {
  const lensUserQuery = useLensUser();
  return (
    <LensUserContext.Provider value={lensUserQuery}>
      {children}
    </LensUserContext.Provider>
  );
}

export const useLensUserContext = () => useContext(LensUserContext);
