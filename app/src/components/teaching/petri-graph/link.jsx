import React from 'react';
import ReactDOM from 'react-dom';
import FORCE from './force-graph-generator';
import { select } from 'd3-selection';

class Link extends React.Component {
  componentDidMount() {
    FORCE(FORCE || {});
    console.log(select(ReactDOM.findDOMNode(this)));
    this.d3Link = select(ReactDOM.findDOMNode(this))
      .datum(this.props.data)
      .call(FORCE.enterLink);
  }

  componentDidUpdate() {
    this.d3Link.datum(this.props.data).call(FORCE.updateLink);
  }

  render() {
    return (
      <g>
        <line className="link" />
        <text> t1werewrewrewr </text>
      </g>
    );
  }
}

export default Link;
