import React from 'react';
import * as d3 from 'd3';
import ReactDOM from 'react-dom';
import FORCE from './force-graph-generator';

class Node extends React.Component {
  componentDidMount() {
    this.d3Node = d3
      .select(ReactDOM.findDOMNode(this))
      .datum(this.props.data)
      .call(FORCE.enterNode);
  }

  componentDidUpdate() {
    this.d3Node.datum(this.props.data).call(FORCE.updateNode);
  }

  render() {
    return (
      <g className="node">
        <circle onClick={this.props.addLink} />{' '}
        <text> {this.props.data.name} </text>{' '}
      </g>
    );
  }
}

export default Node;
