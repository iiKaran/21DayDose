import { createContext, useState} from 'react';
import {Data} from './Data.js'
export const AppContext = createContext(); 

export function AppContextProvider({children})
{
     {console.log(Data)};
     const[login,setLogin]=useState(false); 
     const[loading,setLoading]=useState(false);
     const [bulb,setBulb] = useState(true); 
     const [points , setPoints] = useState(0);
     const [day, setDay]= useState(1);
     const value = {
      login , 
      setLogin, 
      loading, 
      setLoading, 
      bulb , 
      setBulb,
      setPoints ,
      Data ,
      points, 
      setDay, 
      day
     }
     return <AppContext.Provider value={value}>
      {children}
     </AppContext.Provider>
}


