import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
// import InnerNav from './InnerNav'
import Footer from './Footer'
import Axios  from '../utils/Axios'
import ChallengeCard from './ChallengeCard'
import { AppContext } from '../context/AppContext'
import NotFound from './NotFound'
export default function Challenges() {
  const [Data,setData] = useState(null);
  const {id, loading, setLoading} = useContext(AppContext);
  async function getData()
  {
    setLoading(true); 
    for (let i=0; i < 1000;i++){}
    const res = await Axios.post("/get-habbits").then((response)=>{
      const habbits = response.data.habbits;
      setData(habbits);
      setLoading(false);
    }).catch((err)=>{
      console.log(err); 
    })
  }
  useEffect(()=>{
    getData(); 
  },[])
  return (
    <div className='challenge'>
      <Navbar />
{
       id  && <div className="cardCont">
      {
        Data && Data.map((card)=>{
          // img = {card.url} link = {card.link}
          return <ChallengeCard  img = {card.url} heading = {card.title} 
           content = {card.description} link={"/Start-Challenge"}  id={card._id}/>
        })
      }
       </div>
}
{
  !id && <NotFound/>
}
{
  id && loading && <NotFound/>
}
    <Footer></Footer>
    </div>
  )
}

