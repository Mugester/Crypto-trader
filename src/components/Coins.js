import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BaseURL } from './BaseURL'
import Loader from './Loader'
import { Link } from 'react-router-dom'
// import Error from './Error'

const Coins = () => {

  const [loading, setLoadiing] = useState(true)
  const [coins, setCoins] = useState([])
  const [currency, setCurrency] = useState('usd')
  const [search, setSearch] = useState('')

  const currencySymbol = currency === 'pkr' ? "Rs/-" : "$"

  useEffect(()=>{
    const coinData = async ()=>{
      try {
        const {data} = await axios.get(`${BaseURL}/coins/markets?vs_currency=${currency}`)
        setCoins(data)
        // console.log(data);
        setLoadiing(false);
      } catch (error) {
        setLoadiing(true)
        console.log(error);
      }
    }
    coinData();
},[currency])


  return (
    <>
        
    {/* <video autoPlay muted loop id="myVideo">
      <source src='/Background.mp4' type="video/mp4" />
    </video> */}

  { loading ? <Loader/> : <>
  
    <div style={{position:'relative',bottom:"60px"}}>
    <div className='ms-5'>
        <input type='text' placeholder='Search Coins....' 
        style={{position:'absolute',top:'100px', right:'20px'}}
          onChange={(e)=>setSearch(e.target.value)}
        />
      </div>

      <div className='currency-button mt-5'>
      <button onClick={()=>{setCurrency('pkr')}}>PKR</button>
      <button onClick={()=>{setCurrency('usd')}}>USD</button>
      </div>
    </div>

    {
      coins.filter((data)=>{
        if(data ===''){
          return data
        }
        else if(data.name.toLowerCase().includes(search.toLowerCase())){
          return data
        }
      }).map((coin,i)=>{
        return(
          <CoinData coin={coin} id={coin.id} i={i} currencySymbol={currencySymbol} />
        )
      })
    }
    </>}
    </>
  )
}

const CoinData = ({coin, i, currencySymbol, id})=>{
  const profit = coin.price_change_percentage_24h>0

return(

  <Link to={`/coins/${id}`} style={{color:"black" ,textDecoration:"none"}} >

    <div key={i} className='ex-cards'>  
  <div className='image'>
    <img height={50} src={coin.image}/>
  </div>
  <div className='name'>
    {coin.name}
  </div>
  <div className='price'> 
    {coin.current_price} {currencySymbol}
  </div>
  <div style={profit ? {color : "green"} : {color:"red"}} className='rank'>
    {profit ? "+" + coin.price_change_percentage_24h.toFixed(2) : 
      coin.price_change_percentage_24h.toFixed(2)}
  </div>
</div>
    </Link>
)
}

export default Coins
