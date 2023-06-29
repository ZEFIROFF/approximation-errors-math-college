import React, {useState} from 'react';
import './App.css';
// @ts-ignore
import formula from './image/Screenshot_6.png'

function App() {
  const [a, setA] = useState(2.03);
  const [b, setB] = useState(-1.670);
  const [x, setX] = useState(0.970);
  const [y, setY] = useState(0.504);

  const calculate = () => {
    const result = (a * b - Math.exp(x)) / Math.sin(y);
    return result.toFixed(4);
  };

  return (
    <div className="App">
      <div>
        <div className="calculator">
        <h1>Вычисление погрешностей результатов арифметических действий над приближёнными числами</h1>
        <h2>Пусть а, b, у – приближенные числа с верными в строгом смысле значащими цифрами, х – точное число. Вычислить <img
            src={formula} alt="(a*b-e^x)/sin(y)"/> и оценить погрешность результата.
        </h2>
        </div>
        <div className="input-group">
        <label>
          a:
          <input type="number" value={a} onChange={e => setA(+e.target.value)} />
        </label>
        <label>
          b:
          <input type="number" value={b} onChange={e => setB(+e.target.value)} />
        </label>
        <label>
          x:
          <input type="number" value={x} onChange={e => setX(+e.target.value)} />
        </label>
        <label>
          y:
          <input type="number" value={y} onChange={e => setY(+e.target.value)} />
        </label>
        </div>
        <h2>Result: {calculate()}</h2>
      </div>
    </div>
  );
}

export default App;
