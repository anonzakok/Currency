import React, { useState } from "react";

const App = () => {
  const Currency = {
    bath: null,
    dollar: null,
  };

  const [currency, setCurrency] = useState(Currency);

  const onInput = (filed) => (event) => {
    setCurrency({
      ...currency,
      [filed]: event.target.value,
    });
  };

  const onClickCurrency = () => {
    const sum = currency.bath * 0.032;
    setCurrency({
      ...currency,
      dollar: sum,
    });
  };

  return (
    <>
      <div style={{ padding: "50px" }}>
        <label>เงินบาท </label>
        <input type="text" value={currency.bath} onChange={onInput("bath")} />
        <button type="button" onClick={onClickCurrency}>
          แปลงค่าเงินดอลล่า
        </button>
        <br />
        <br />
        <p>{currency.dollar} .USD</p>
      </div>
    </>
  );
};

export default App;
