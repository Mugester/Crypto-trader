import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BaseURL } from './BaseURL'
import Loader from './Loader'
import OurModel from './OurModel'
// import Error from './Error'
// import Error from './Error';

const Exchanges = () => {

  const [loading, setLoadiing] = useState(true)
  const [broker, setBroker] = useState([])

  useEffect(()=>{
      const getExData = async ()=>{
        try {
          const {data} = await axios.get(`${BaseURL}/exchanges`)
          setBroker(data)
          setLoadiing(false);
        } catch (error) {
          // <Error/>
          setLoadiing(true)
          console.log(error);
        }
    }
    getExData();

},[])

  return (

    <>
    
    {/* <video autoPlay muted loop id="myVideo">
      <source src='/Background.mp4' type="video/mp4" />
    </video> */}

      {loading ? <Loader/> : <>

      <div  className='Main-card'>
            <div className='image'>
            <strong>Broker</strong>
            </div>
            <div className='name'>
            <strong>Name</strong>
            </div>
            <div className='price'> 
            <strong>24h Volume</strong>
            </div>
            <div id='Avarage' className='rank'>
            <strong>Average Volume</strong>
            </div>
            <div className='rank'>
            <strong>Trust Score</strong>
            </div>
            <div className='rank'>
            <strong>Rank</strong>
            </div>
          </div>


      {
      broker.map((item,i)=>{
        return(
          <a href={item.url} style={{color:"black", textDecoration:"none"}} target='block'>
          <div key={i} className='ex-cards'>
            <div className='image'>
            <img height={50} src={item.image} className="avatar" alt="Avatar" /></div>
            <div className='name'>
              {item.name}
            </div>
            <div className='price'> 
            $ {item.trade_volume_24h_btc.toFixed(2)}
            </div>
            <div className='rank'>
            $ {item.trade_volume_24h_btc_normalized.toFixed(2)}
            </div>
            <div className='rank'>
            {item.trust_score}
            </div>
            <div className='rank'>
            {item.trust_score_rank}
            </div>
          </div>
          </a>
        )
      })
    }
        </>
      }
    </>

  )
}

export default Exchanges


{/* <div  id='tableParent'> 
<table className="table table-striped table-hover">
  <thead>
    <tr className='text-center'>
      <th>Broker</th>
      <th>Name</th>
      <th>Volume 24h</th>						
      <th>Normlized Volume</th>						
      <th>Trust score</th>
      <th>Ranking</th>
    </tr>
  </thead>

  {
    broker.map((item,i)=>{
      return(
        <>
  <tbody key={i}>
    <tr className='text-center'>
      <td><a href={item.url} target='block'><img src={item.image} className="avatar" alt="Avatar" /></a></td>
      <td>{item.name}</td>
      <td>$ {item.trade_volume_24h_btc.toFixed(2)}</td>                        
      <td>$ {item.trade_volume_24h_btc_normalized.toFixed(2)}</td>
      <td>{item.trust_score}</td>
      <td>{item.trust_score_rank}</td>
    </tr>
  </tbody>
      </>
      )
    })
  }
</table>
</div> */}