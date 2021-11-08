import * as React from "react";

export default function Svg(props: { file?: string, type: string, classes: string }): JSX.Element {
  return (
    <svg className={props.classes}>
      <use xlinkHref={`./../../img/icons/${props.file}.svg#${props.type}`} />
    </svg>
  );
}

Svg.defaultProps = { file: 'button-sprite' };
