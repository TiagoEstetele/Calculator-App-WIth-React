import style from "./Calculator.module.scss";
import moreSvg from '../../assets/img/more-svgrepo-com.svg';
import React, { useState } from "react";

export function Calculator() {
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [num, setNum] = useState(0);
  const [oldnum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();
  const [result, setResult] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [history, setHistory] = useState([]);

  function inputNum(valor) {
    var value = valor.target.value;
    if (num === 0 || showResult) {
      setNum(value);
      setShowResult(false);
    } else {
      setNum(num + value);
    }
  }

  function clear() {
    setNum(0);
    setOldNum(0);
    setOperator(undefined);
    setResult(0);
    setShowResult(false);
    setHistory([]);
  }

  function porcentage() {
    setNum(num / 100);
  }

  function calculate() {
    let newResult = 0;

    if (operator === "/") {
      newResult = oldnum / num;
    } else if (operator === "+") {
      newResult = parseFloat(oldnum) + parseFloat(num);
    } else if (operator === "-") {
      newResult = oldnum - num;
    } else if (operator === "x") {
      newResult = oldnum * num;
    }

    setResult(newResult);
    setShowResult(true);

    const calculation = `${oldnum} ${operator} ${num} = ${newResult}`;
    setHistory([...history, calculation]);
    setOldNum(newResult); // Define o resultado como o "oldnum" para continuar o cálculo
    setNum(0); // Redefine o "num" para começar uma nova entrada numérica
  }

  function operatorHandler(e) {
    var operatorInput = e.target.value;
    if (showResult) {
      // Se houver um resultado exibido, continue a partir do resultado anterior
      setOldNum(result);
      setNum(0);
      setShowResult(false);
    } else {
      setOldNum(num);
      setNum(0);
    }
    setOperator(operatorInput);
  }

  return (
    <main className={style.calculator__container}>
        <section className={style.calculator}>
            <div className={style.calculator__header}>
                <div className={style.calculator__buttons}>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
                <div className={style.calculator__undo}>
                    <button onClick={clear}>Limpar</button>
                </div>
                <div className={style.calculator__more}>
                    <button><img src={moreSvg} alt="" /></button>
                </div>
            </div>

            <div className={style.calculator__result}>
                <ul>
                    {history.map((calculation, index) => (
                        <li key={index}>{calculation}</li>
                    ))}
                </ul>
            </div>

            <div className={style.calculator__calc}>
                <h2>{showResult ? result : num}</h2>
            </div>

            <div className={style.calculator__operators}>
                <div className={style.calculator__numbers}>
                    {numbers.reverse().map((number) => <button onClick={inputNum} value={number}>{number}</button>)}
                </div>
                <div className={style.calculator__expressions}>
                    <button onClick={operatorHandler} value={'+'}>+</button> 
                    <button onClick={operatorHandler} value={'-'}>-</button>
                    <button onClick={operatorHandler} value={'x'}>x</button>
                    <button onClick={operatorHandler} value={'/'}>/</button>
                    <button onClick={inputNum} value={','}>,</button>
                    <button onClick={porcentage}>%</button>
                    <button onClick={calculate}>=</button>
                </div>
            </div>
        </section>
    </main>
  ) 
}