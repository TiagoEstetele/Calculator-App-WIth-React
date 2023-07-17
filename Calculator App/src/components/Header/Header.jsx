import style from "./Header.module.scss";

export function Header() {
  return (
    <header className={style.header}>
        <div className={style.header__title}>
            <h1>calc</h1>
        </div>
        <div className={style.header__themes}>
            <p>THEME:</p>
            <div className={style.header__buttons}>
                <button>CHANGE COLOR</button>
            </div>
        </div>
    </header>
  )
}
