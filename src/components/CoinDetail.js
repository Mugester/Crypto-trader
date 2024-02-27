import React, { useEffect, useState } from 'react'
import Loading from './Loader'
import axios from 'axios'
import { BaseURL } from './BaseURL'
import { useParams } from 'react-router-dom'
import {BiSolidUpArrow, BiSolidDownArrow} from "react-icons/bi"
import {IoPulseOutline} from "react-icons/io5"
import CoinChart from './CoinChart'


const CoinDetail = () => {

  const {id} = useParams()
  const [loading, setLoadiing] = useState(true)
  const [coin, setCoin] = useState([])
  const [currency, setCurrency] = useState('usd')
  const currencySymbol = currency === 'pkr' ? "Rs" : "$"

  useEffect(()=>{
    const coinData = async ()=>{
      try {
        const {data} = await axios.get(`${BaseURL}/coins/${id}`);
        setCoin(data);
        console.log(data);
        setLoadiing(false);
      } catch (error) {
        console.log(error);
        setLoadiing(true);
      }
    }
    coinData();
  },[])

  return (
    <>
      {loading? <Loading/> : <>

  <div class='container coin-detail-graph mt-5 pt-3'>
        <div class='coin-info'>
          <div class='btn-coinDetial'>
            <button class='me-2' onClick={()=>{setCurrency('pkr')}}>PKR</button>
            <button onClick={()=>{setCurrency('usd')}}>USD</button>
          </div>

          <div class='time'>
            {coin.last_updated}
          </div>
          <div class='coin-image'>
            <img height={130} src={coin.image.large} alt='coin-image'/>
          </div>
          <div class='coin-name'>
            {coin.name}
          </div>
          <div class='coin-price'>
            {currencySymbol} {coin.market_data.current_price[currency]}
          </div>
          <div class='coin-profit'>
            {coin.market_data?.price_change_percentage_24h > 0 ? <BiSolidUpArrow color='green' style={{marginRight:"5px"}}/> : <BiSolidDownArrow color='red' style={{marginRight:"5px"}}/>}
            {coin.market_data.price_change_percentage_24h} %
          </div>
          <div class='coin-rank'>
            <IoPulseOutline style={{marginRight:"5px"}}/> 
            # {coin.market_cap_rank}
          </div>
          <div class='coin-desc'>
            {coin.description['en'].slice(0,100)}
          </div>
        </div>

        <div className='coin-info2'>
        <CoinChart currency={currency}/>
        </div>

      </div>


      </>}
    </>
  )
}

export default CoinDetail



{/* <div className='coin-detail' style={{display:'flex',justifyContent:'space-evenly'}}>
<div className='coin-info'>

<div className='btn-coinDetial'>
<button className='me-2' onClick={()=>{setCurrency('pkr')}}>PKR</button>
<button onClick={()=>{setCurrency('usd')}}>USD</button>
</div>

  <div className='time'>
  {coin.last_updated}
  </div>
  <div className='coin-image'>
    <img height={130} src={coin.image.large}/>
  </div>
  <div className='coin-name'>
    {coin.name}
  </div>
  <div className='coin-price'>
   {currencySymbol} {coin.market_data.current_price[currency]}
  </div>
  <div className='coin-profit'>
    {coin.market_data?.price_change_percentage_24h > 0 ? <BiSolidUpArrow color='green' style={{marginRight:"5px"}}/> : <BiSolidDownArrow color='red' style={{marginRight:"5px"}}/>}
    {coin.market_data.price_change_percentage_24h} %
  </div>
  <div className='coin-rank'>
  <IoPulseOutline style={{marginRight:"5px"}}/> 
    # {coin.market_cap_rank}
  </div>
  <div className='coin-desc'>
    {coin.description['en'].slice(0,100)}
  </div>
</div>
<CoinChart currency={currency}/>
</div> */}