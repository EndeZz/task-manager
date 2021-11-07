import './nav.scss';

function Menu() {
  return (
    <div>
      <li className="button nav__btn">
        <a href="/">Главная</a>
      </li >
      <li className="button nav__btn">
        <a href="/tasks">Задачи</a>
      </li>
    </div>
  )
}

function MenuAdmin() {
  return (
    <div>
      <Menu></Menu>
      <li className="button nav__btn">
        <a href="/users">Пользователи</a>
      </li>
    </div>
  )
}

function Nav(props: { role: "admin" | "manager" | "content-maker" }) {
  return (
    <div className="nav">
      <ul className="nav__list">
          {
            props.role === 'admin' 
            ? <MenuAdmin></MenuAdmin>
            : <Menu></Menu>
          }
      </ul>
    </div>
  );
}

export default Nav;