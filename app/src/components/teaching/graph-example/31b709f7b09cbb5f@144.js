// https://observablehq.com/@xadahiya/force-directed-graph@144
export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(['md'], function (md) {
    return md`
`;
  });
  main
    .variable(observer('chart'))
    .define(
      'chart',
      ['data', 'd3', 'width', 'height', 'DOM', 'color', 'drag', 'invalidation'],
      function (data, d3, width, height, DOM, color, drag, invalidation) {
        const links = data.links.map(d => Object.create(d));
        const nodes = data.nodes.map(d => Object.create(d));

        const simulation = d3
          .forceSimulation(nodes)
          .force(
            'link',
            d3.forceLink(links).id(d => d.id)
          )
          .force('charge', d3.forceManyBody())
          .force('center', d3.forceCenter(width / 2, height / 2));

        const svg = d3.select(DOM.svg(width, height));

        const link = svg
          .append('g')
          .attr('stroke', '#999')
          .attr('stroke-opacity', 1)
          .selectAll('line')
          .data(links)
          .join('line')
          .attr('stroke-width', d => Math.log(d.value));

        const node = svg
          .append('g')
          .attr('stroke', '#fff')
          .attr('stroke-width', 1.5)
          .selectAll('circle')
          .data(nodes)
          .join('circle')
          .attr('r', 5)
          .attr('fill', color)
          .call(drag(simulation));

        node.append('title').text(d => 'Ip address : ' + d.id);

        simulation.on('tick', () => {
          link
            .attr('x1', d => d.source.x)
            .attr('y1', d => d.source.y)
            .attr('x2', d => d.target.x)
            .attr('y2', d => d.target.y);

          node.attr('cx', d => d.x).attr('cy', d => d.y);
        });

        invalidation.then(() => simulation.stop());

        return svg.node();
      }
    );
  main.variable(observer('data')).define('data', ['d3'], function (d3) {
    return d3.json('ip.json');
  });
  main.variable(observer('height')).define('height', function () {
    return 600;
  });
  main.variable(observer('color')).define('color', ['d3'], function (d3) {
    const scale = d3.scaleOrdinal(d3.schemeRdYlGn[4]);
    return d => scale(d.group);
  });
  main.variable(observer('drag')).define('drag', ['d3'], function (d3) {
    return simulation => {
      function dragstarted(d) {
        if (!d3.event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      }

      function dragged(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
      }

      function dragended(d) {
        if (!d3.event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      }

      return d3
        .drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended);
    };
  });
  main.variable(observer('d3')).define('d3', ['require'], function (require) {
    return require('d3@5');
  });
  return main;
}
