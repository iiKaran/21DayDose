import { createContext, useState} from 'react';

export const AppContext = createContext(); 

export function AppContextProvider({children})
{
     const[login,setLogin]=useState(false); 
     const[loading,setLoading]=useState(false);
     const [bulb,setBulb] = useState(true); 
     const [points , setPoints] = useState(0);
     const value = {
      login , 
      setLogin, 
      loading, 
      setLoading, 
      bulb , 
      setBulb,
      points
     }
     return <AppContext.Provider value={value}>
      {children}
     </AppContext.Provider>
}


