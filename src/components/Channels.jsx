import React from 'react';
import PropTypes from 'prop-types';
import ChannelItem from './ChannelItem';

const Channels = ({ channels }) => (
  <div className="channels">
    {channels.map((channel) => (
      <ChannelItem key={channel.id} channel={channel} />
    ))}
  </div>
);

Channels.propTypes = {
  channels: PropTypes.arrayOf(
    ChannelItem.propTypes,
  ).isRequired,
};

export default Channels;
