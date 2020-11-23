import React, { useState } from "react";
import './App.css';

  const App = () => {
    const CURRENCY = {
      bath:null,
      dollar:null,
      KRW:null
    };
    
    const [currency, setCurrency] = useState(CURRENCY);
    const onInput = (filed) => (event) =>{
      setCurrency({
        ...currency,
        [filed]: event.target.value
      })
    }
    const onClickCurrency = (event)=>{
      const sum = currency.bath * 0.03;
      setCurrency({
        ...currency,
        dollar: sum
      })
    };
    const onClickCurrencyKRW = (event)=>{
      const sumKRW = currency.KRW * 36.67;
      setCurrency({
        ...currency,
        KRW: sumKRW
      })
    };

  return (
   <>
   <div>
     <label>เงินบาท</label>
     <input type="number" value={currency.bath} onChange={onInput("bath")} />
        <button type="button" onClick={onClickCurrency} > 
        แปลงค่าเงินดอลล่า</button>
        </div>
        <div>
          <label>เงินดอลล่า</label>
          <input type="number" value={currency.dollar} readOnly />
        </div>
        <div>
        <label>เงินบาท</label>
        <input type="number"  onChange={onInput("KRW")} />
        <button type="button" onClick={onClickCurrencyKRW} > 
        แปลงค่าเงินเยน</button>
        </div>
        <div>
          <label>เงินเกาหลีวอน</label>
          <input type="number" value={currency.KRW} readOnly />
        </div>
   </>
  );
  };

export default App;
