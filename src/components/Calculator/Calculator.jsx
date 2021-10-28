import { useState } from "react";

function Calculator({courses}) {
  const [value, setValue] = useState("1");
  const [valuePrice, setValuePrice] = useState("1");
  const [cost, setCost] = useState("1");
  const [costCurrent, setCostCurrent] = useState("1");


  const handleCalculator = (value, cost, costCurrent) => {
    let currentSum = value * cost,
    result = currentSum / costCurrent

    setValuePrice(result.toFixed(2))
  }

  return (
    <section className="calculator">
      <div className="container">
        <h2 className="calculator__title">Калькулятор валют:</h2>
        <div className="calculator__block">
          <div className="calculator__current">
            <p className="calculator__current-title">Ваш выбор:</p>
            <select className="calculator__country" onChange={(e) => setCost(e.target.value)} value={cost}>
              <option key="rub" value="1">Рубль (RUB)</option>
              {courses.map(item => (
                 <option key={item.CharCode} value={item.Value}>{item.Name} ({item.CharCode})</option>
              ))}
            </select>
            <input
              className="calculator__nmb "
              type="number"
              placeholder="Количество"
              onChange={(e) => setValue(e.target.value)}
              value={value}
            />
          </div>
          <div className="calculator__target">
            <p className="calculator__target-title">Результат:</p>
            <select className="calculator__country" onChange={(e) => setCostCurrent(e.target.value)} value={costCurrent}>
              <option key="rub" value="1">Рубль (RUB)</option>
              {courses.map(item => (
                 <option key={item.CharCode} value={item.Value}>{item.Name} ({item.CharCode})</option>
              ))}
            </select>
            <p className="calculator__nmb calculator__nmb-result">{valuePrice}</p>
          </div>
          <button className="calculator__btn" onClick={ () => handleCalculator(value, cost, costCurrent)}>Магия</button>
        </div>
      </div>
    </section>
  );
}

export { Calculator };
