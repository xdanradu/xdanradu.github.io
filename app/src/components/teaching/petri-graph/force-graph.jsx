import './force-graph.scss';
import React, { Component } from 'react';
import FORCE from './force-graph-generator';
import './force-graph.scss';
import Link from './link';
import Node from './node';

class ForceGraph extends React.Component {
  constructor(props) {
    super(props);
    FORCE(FORCE || {});
    this.state = {
      addLinkArray: [],
      name: '',
      nodes: [
        {
          name: '100',
          id: 0
        },
        {
          name: '010',
          id: 1
        },
        {
          name: '011',
          id: 2
        },
        {
          name: '001',
          id: 3
        }
      ],
      links: [
        {
          source: 0,
          target: 1,
          id: 0
        },
        {
          source: 0,
          target: 2,
          id: 1
        },
        {
          source: 0,
          target: 3,
          id: 2
        }
      ]
    };
    this.handleAddNode = this.handleAddNode.bind(this);
    this.addNode = this.addNode.bind(this);
  }

  componentDidMount() {
    const data = this.state;
    FORCE.initForce(data.nodes, data.links);
    FORCE.tick(this);
    FORCE.drag();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.nodes !== this.state.nodes ||
      prevState.links !== this.state.links
    ) {
      const data = this.state;
      FORCE.initForce(data.nodes, data.links);
      FORCE.tick(this);
      FORCE.drag();
    }
  }

  handleAddNode(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addNode(e) {
    e.preventDefault();
    this.setState(prevState => ({
      nodes: [
        ...prevState.nodes,
        {
          name: this.state.name,
          id: prevState.nodes.length + 1,
          x: FORCE.width / 2,
          y: FORCE.height / 2
        }
      ],
      name: ''
    }));
  }

  render() {
    var links = this.state.links.map(link => {
      return <Link key={link.id} data={link} />;
    });
    var nodes = this.state.nodes.map(node => {
      return <Node data={node} name={node.name} key={node.id} />;
    });
    return (
      <div className="graph__container">
        <form className="form-addSystem" onSubmit={this.addNode.bind(this)}>
          <h4 className="form-addSystem__header"> New Node </h4>
          <div className="form-addSystem__group">
            <input
              value={this.state.name}
              onChange={this.handleAddNode.bind(this)}
              name="name"
              className="form-addSystem__input"
              id="name"
              placeholder="Name"
            />
            <label className="form-addSystem__label" htmlFor="title">
              {' '}
              Name{' '}
            </label>
          </div>{' '}
          <div className="form-addSystem__group">
            <input className="btnn" type="submit" value="add node" />
          </div>{' '}
        </form>
        <svg className="graph" width={FORCE.width} height={FORCE.height}>
          <defs>
            <marker
              id="arrowhead"
              viewBox="0 0 10 10"
              refX="22"
              refY="5"
              markerUnits="strokeWidth"
              markerWidth="10"
              markerHeight="10"
              orient="auto"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="orange" />
            </marker>
          </defs>
          <g> {links} </g> <g> {nodes} </g>{' '}
        </svg>{' '}
      </div>
    );
  }
}

export default ForceGraph;
