import * as S from './style'
import axios from 'axios';
import { useState } from 'react';

export default function index() {
  const [location, setLocation] = useState('');
  const API_KEY = 'dae570d852df1aee188489e22be897f9';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;
  const [result, setResult] = useState({});

  const searchWeather = async (e) => {
    if(e.key === 'Enter'){
      try{
        const data = await axios.get(url);
        setResult(data);
        console.log(data);
      } catch (err){
        alert(err);
      }
    }
  }

  return (
    <S.AppWrap>
      <div className='appContentWrap'>
        <input 
          placeholder='도시를 입력하세요'
          onChange={(e) => setLocation(e.target.value)}
          onKeyDown={searchWeather}
        />
        {
          Object.keys(result).length !== 0 && (
            <S.ResultWrap>
              <div className='city'>{result.data.name}</div>
                <div className='temperature'>
                  {Math.round((result.data.main.temp -273.15) * 10) / 10}°C  {/* 도씨에서 섭씨로 변환 */}
                </div>
              <div className='sky'>{result.data.weather[0].main}</div>
            </S.ResultWrap>
          )
        }
      </div>
    </S.AppWrap>
  )
}
