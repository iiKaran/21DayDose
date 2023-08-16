import { createContext, useState} from 'react';
export const AppContext = createContext(); 

export function AppContextProvider({children})
{
     // {console.log(Data)}
     const[login,setLogin]=useState(false); 
     const[loading,setLoading]=useState(false);
     const [bulb,setBulb] = useState(true); 
     const [points , setPoints] = useState(0);
     const [day, setDay]= useState(1);
     const [habbit, sethabbit] = useState([]);
     const [emailState, setEmailState] = useState(null);
     const [id,setId] = useState(null);
     const value = {
      login , 
      setLogin, 
      loading, 
      setLoading, 
      bulb , 
      setBulb,
      setPoints ,
      points, 
      setDay, 
      day, 
      habbit, 
      sethabbit,
      emailState, 
      setEmailState,
      id, 
      setId
     }
     return <AppContext.Provider value={value}>
      {children}
     </AppContext.Provider>
}


