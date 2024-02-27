import React, { useEffect, useState } from 'react';
import { BaseURL } from './BaseURL';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import Loading from './Loader';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const CoinChart = ({ currency }) => {

    const { id } = useParams();
    const [chartData, setChartData] = useState([]);
    const [day, setDays] = useState(1);

    const CoinChartData = async () => {
        try {
            const { data } = await axios.get(`${BaseURL}/coins/${id}/market_chart?vs_currency=${currency}&days=${day}`);
            setChartData(data.prices);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        CoinChartData();
    }, [currency, id, day])

    const myData = {
        labels: chartData.map((value) => {
            const date = new Date(value[0]);
            const time = date.getHours() > 12 ? `${date.getHours() - 12} : ${date.getMinutes()} PM` : `${date.getHours()} : ${date.getMinutes()} AM`;
            return day === 1 ? time : date.toLocaleDateString();
        }),
        datasets: [
            {
                labels: `Price in Past Days ${day} in ${currency}`,
                data: chartData.map((value) => value[1]),
                borderColor: 'orange',
                borderWidth: '3',
            }
        ]
    };

    return (
        <>
            {chartData.length === 0 ? <Loading /> :
                <div className='chart'>
                    <Line data={myData} options={{
                        elements: {
                            point: {
                                radius: 1,
                            }
                        }
                    }} style={{ marginTop: "2rem", width: '50rem' }} />

                    <div className='btn-coinDetial mt-2'>
                        <button className='me-1' onClick={() => { setDays(1) }}>24h</button>
                        <button className='me-1' onClick={() => { setDays(30) }}>1-Month</button>
                        <button onClick={() => { setDays(365) }}>1-Year</button>
                    </div>
                </div>
            }
        </>
    )
}

export default CoinChart;





















// import React, { useEffect, useState } from 'react'
// import { BaseURL } from './BaseURL'
// // import Error from './Error'
// import axios from 'axios'
// import { useParams } from 'react-router-dom'
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
//   } from 'chart.js';
//   import { Line } from 'react-chartjs-2';
// import Loading from './Loader'
  
//   ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend
//   );

// const CoinChart = ({currency}) => {

//     const {id} = useParams()
//     const [chartData, setChartData] = useState([])
//     const [day, setDays] = useState(1)

//     const CoinChartData = async ()=>{
//         try {
//             const { data } = await axios.get(`${BaseURL}/coins/${id}/market_chart?vs_currency=${currency}&days=${day}`)
//             // console.log(data);
//             setChartData(data.prices)
//             // console.log(chartData);
//         } catch (error) {
//             // <Error/>
//             console.log(error);
            
//         }
//     }
//     useEffect(()=>{
//         CoinChartData();
//     },[currency, id, day])

//     const myData ={
//         labels: chartData.map((value)=>{
//             // console.log(value);
//             const date = new Date(value[0])
//             const time = date.getHours() > 12 ? `${date.getHours() -12} : ${date.getMinutes()} PM` : `${date.getHours()} : ${date.getMinutes()} AM`
//             return day === 1 ? time:date.toLocaleDateString() 
//             // console.log(date);
//         }),
//         datasets:[
//             {
//                 labels:`Price in Past Days ${day} in ${currency}`,
//                 data: chartData.map((value)=>value[1]),
//                 borderColor: 'orange',
//                 borderWidth: '3',
//             }
//         ]
//     }

//   return (
//     <>
//         {chartData.length === 0 ? <Loading/> :<>
//         <div>
//       <Line data={myData} options={{
//         elements:{
//             point:{
//                 radius:1,
//             }
//         }
//       }} style={{marginTop:"2rem", width:'50rem'}} />

//       <div className='btn-coinDetial mt-2'>
//       <button className='me-1' onClick={()=>{setDays(1)}}>24h</button>
//       <button className='me-1' onClick={()=>{setDays(30)}}>1-Month</button>
//       <button onClick={()=>{setDays(365)}}>1-Year</button>
//       </div>
//     </div>
//         </>}
//     </>
//   )
// }

// export default CoinChart
