import Program from "./Program";

const ChannelItem = ({ channel }) => {
  return (
    <div className="channel-item">
      <div className="channel-logo">
        <img src={channel.img} alt="" />
      </div>
      <div>
        <h3 className="channel-title">{channel.title}</h3>
        <div className="programs">
          {channel.schedule.map((program) => (
            <Program key={program.id} program={program} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChannelItem;
