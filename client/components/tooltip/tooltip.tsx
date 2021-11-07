import React, { FC } from 'react';
import './tooltip.scss';

interface TooltipProps {}

const Tooltip: FC<TooltipProps> = () => (
    <div className="tooltip">
      <span className="tooltip__date">14.02.2020, </span>
      <span className="tooltip__time">02:31</span>
      <span className="tooltip__file"> В работе</span>
    </div>
);

export default Tooltip;
