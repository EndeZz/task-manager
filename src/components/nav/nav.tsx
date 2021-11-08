import './nav.scss';

function Nav(props: { role: "admin" | "manager" | "content-maker" }) {
  return (
    <div className="nav">
      {(() => {
          switch (props.role) {
            case 'admin':
              return (
                <ul className="nav__list">
                  <li className="button nav__btn">
                    <a href="/">Главная</a>
                  </li >
                  <li className="button nav__btn">
                    <a href="/tasks">Задачи</a>
                  </li>
                </ul>
              )
            default:
              return (
                <ul className="nav__list">
                  <li className="button nav__btn">
                    <a href="/">Главная</a>
                  </li >
                  <li className="button nav__btn">
                    <a href="/tasks">Задачи</a>
                  </li>
                  <li className="button nav__btn">
                    <a href="/users">Пользователи</a>
                  </li>
                </ul>
              )
            }  
        })()}
    </div>
  );
}

export default Nav;