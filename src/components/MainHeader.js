const MainHeader = ({ title, onClick, isActive }) => {
  return (
    <button className={isActive ? "active-page" : ""} onClick={onClick}>
      {title}
    </button>
  );
};

export default MainHeader;
