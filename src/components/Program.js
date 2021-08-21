const Program = ({ program }) => {
  return (
    <div className="program">
      <p className="program-hour">{program.hour}</p>
      <p>{program.program}</p>
    </div>
  );
};

export default Program;
