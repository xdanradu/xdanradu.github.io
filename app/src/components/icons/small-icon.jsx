import React from 'react';
import './small-icon.scss';
export function SmallIcon(props) {
  const { icon } = props;
  return <div className="icon-small">{icon()}</div>;
}
