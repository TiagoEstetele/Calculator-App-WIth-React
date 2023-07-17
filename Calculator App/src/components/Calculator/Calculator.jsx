import style from "./Calculator.module.scss";
import moreSvg from '../../assets/img/more-svgrepo-com.svg';
import React, { useState } from "react";

export function Calculator() {
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const [num, setNum] = useState(0);
    const [oldnum, setOldNum] = useState(0);
    const [operator, setOperator] = useState();

    function inputNum(valor) {
        var value = valor.target.value;
        if(num === 0) {
            setNum(value);
        } else {
            setNum(num + value);
        }
    }

    function clear() {
        setNum(0);
    }

    function adition() {
        setNum(num + num);
    }

    function porcentage() {
        setNum(num / 100);
    }

    function calculate() {
        if(operator === "/") {
            setNum(oldnum / num);
        }

        if(operator === "+") {
            setNum(parseFloat(oldnum) + parseFloat(num));
        }

        if(operator === "-") {
            setNum(oldnum - num);
        }

        if(operator === "x") {
            setNum(oldnum * num);
        }
    }

    function operatorHandler(e) {
        var operatorInput = e.target.value;
        setOperator(operatorInput)
        setOldNum(num);
        setNum(0);
    }
  return (
    <main>
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
                <h3>{oldnum + operator + num + '='}</h3>
            </div>

            <div className={style.calculator__calc}>
                <h2>{num}</h2>
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