import style from "./Calculator.module.scss";
import moreSvg from '../../assets/img/more-svgrepo-com.svg';

export function Calculator() {
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var expressions = ['+', '-', 'x', '/', '.', '%', '='];
  return (
    <section className={style.calculator}>
        <div className={style.calculator__header}>
            <div className={style.calculator__buttons}>
                <button></button>
                <button></button>
                <button></button>
            </div>
            <div className={style.calculator__undo}>
                <button>Desfazer</button>
            </div>
            <div className={style.calculator__more}>
                <button><img src={moreSvg} alt="" /></button>
            </div>
        </div>

        <div className={style.calculator__result}>
           
        </div>

        <div className={style.calculator__calc}>

        </div>

        <div className={style.calculator__operators}>
            <div className={style.calculator__numbers}>
                {numbers.reverse().map((number) => <button>{number}</button>)}
            </div>
            <div className={style.calculator__expressions}>
                {expressions.map((expression) => <button>{expression}</button>)}
            </div>
        </div>
    </section>
  ) 
}