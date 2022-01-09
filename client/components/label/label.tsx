import React from 'react';

export default function Label(props: { text: string, children?: JSX.Element }) {
  let styles = {
    marginBottom: '0.9rem'
  }
  return (
    <label htmlFor="" className={`search__container search__container_${props.children.props.type}`}>
      <p className="label" style={styles}>{props.text} </p>
      {props.children}
    </label>
  )
}
