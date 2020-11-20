import * as d3 from 'd3';
import ReactDOM from 'react-dom';
let FORCE = function (nsp) {
  const width = 1080,
    height = 250,
    color = d3.scaleOrdinal(d3.schemeCategory10),
    initForce = (nodes, links) => {
      nsp.force = d3
        .forceSimulation(nodes)
        .force('charge', d3.forceManyBody().strength(-200))
        .force('link', d3.forceLink(links).distance(170))
        .force(
          'center',
          d3
            .forceCenter()
            .x(nsp.width / 2)
            .y(nsp.height / 2)
        )
        .force('collide', d3.forceCollide([5]).iterations([5]));
    },
    enterNode = selection => {
      const circle = selection
        .select('circle')
        .attr('r', 25)
        .style('fill', function (d) {
          if (d.id > 3) {
            return 'darkcyan';
          } else {
            return 'tomato';
          }
        })
        //.style('fill-opacity', 0) //to be deleted
        .style('stroke', 'bisque')
        .style('stroke-width', '1px');

      selection
        .select('text')
        .style('fill', 'honeydew')
        .style('font-weight', '300')
        .style('text-transform', 'uppercase')
        .style('text-anchor', 'middle')
        .style('alignment-baseline', 'middle')
        .style('font-size', '18px')
        .style('font-family', 'cursive');
    },
    updateNode = selection => {
      selection
        .attr('transform', d => 'translate(' + d.x + ',' + d.y + ')')
        .attr('cx', function (d) {
          return (d.x = Math.max(30, Math.min(width - 30, d.x)));
        })
        .attr('cy', function (d) {
          return (d.y = Math.max(30, Math.min(height - 30, d.y)));
        })
        .attr('id', d => 'node-' + d.id);
    },
    enterLink = selection => {
      selection
        .select('line')
        .attr('stroke-width', 2)
        .attr('stroke', 'bisque')
        .attr('marker-end', 'url(#arrowhead)');

      selection
        .select('text')
        .attr('text-anchor', 'middle')
        .attr('x', 66)
        .attr('font-size', '20')
        .attr('y', 66)
        .attr('fill', 'white');
    },
    updateLink = selection => {
      selection
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y)
        .attr('id', d => 'link-' + d.id);
    },
    updateGraph = selection => {
      selection.selectAll('.node').call(updateNode);
      selection.selectAll('.link').call(updateLink);
    },
    dragStarted = d => {
      if (!d3.event.active) nsp.force.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    },
    dragging = d => {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    },
    dragEnded = d => {
      if (!d3.event.active) nsp.force.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    },
    drag = () =>
      d3
        .selectAll('g.node')
        .call(
          d3
            .drag()
            .on('start', dragStarted)
            .on('drag', dragging)
            .on('end', dragEnded)
        ),
    tick = that => {
      that.d3Graph = d3.select(ReactDOM.findDOMNode(that));
      nsp.force.on('tick', () => {
        that.d3Graph.call(updateGraph);
      });
    };

  nsp.width = width;
  nsp.height = height;
  nsp.enterNode = enterNode;
  nsp.updateNode = updateNode;
  nsp.enterLink = enterLink;
  nsp.updateLink = updateLink;
  nsp.updateGraph = updateGraph;
  nsp.initForce = initForce;
  nsp.dragStarted = dragStarted;
  nsp.dragging = dragging;
  nsp.dragEnded = dragEnded;
  nsp.drag = drag;
  nsp.tick = tick;

  return nsp;
};

export default FORCE;
