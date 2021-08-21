import React from "react";
import ChannelItem from "./ChannelItem";

const Channels = ({ channels }) => {
  return (
    <div className="channels">
      {channels.map((channel) => (
        <ChannelItem key={channel.id} channel={channel} />
      ))}
    </div>
  );
};

export default Channels;
