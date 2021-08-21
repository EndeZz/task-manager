import React from 'react';
import PropTypes from 'prop-types';
import Program from './Program';

const ChannelItem = ({ channel }) => (
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

ChannelItem.propTypes = {
  channel: PropTypes.shape({
    img: PropTypes.isRequired,
    title: PropTypes.string.isRequired,
    schedule: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        hour: PropTypes.string.isRequired,
        program: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default ChannelItem;
