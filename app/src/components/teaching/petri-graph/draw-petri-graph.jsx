import './draw-petri-graph.scss';
import React, {Component} from "react";
import { select } from "d3-selection";
import {scaleOrdinal} from "d3-scale";
import {forceSimulation} from "d3-force";
import * as d3 from "d3";
import * as input from "./graph";


var simulation;
var svg;
var node;
var width;
var height;
var link;
var colors;
var edgepaths;
var edgelabels;

class DrawPetriGraph extends Component {
    componentDidMount() {
        colors = scaleOrdinal(d3.schemeCategory10);


        svg = select(".my-canvas");
        let dims = svg.node();
        width = +dims.getBoundingClientRect().width;
        height = +dims.getBoundingClientRect().height;


        svg.append('defs').append('marker')
            .attr('id','arrowhead')
            .attr('viewBox','-0 -5 10 10')
            .attr('refX',13)
            .attr('refY',0)
            .attr('orient','auto')
            .attr('markerWidth',13)
            .attr('markerHeight',13)
            .attr('xoverflow','visible')
            .append('svg:path')
            .attr('d', 'M 0,-5 L 10 ,0 L 0,5')
            .attr('fill', '#999')
            .style('stroke','none');

        simulation = forceSimulation()
            .force("link", d3.forceLink().id(function (d) {return d.id;}).distance(100).strength(2))
            .force("charge", d3.forceManyBody())
            .force("center", d3.forceCenter(width / 2, height / 2));

        this.update(input.links, input.nodes);


    }

    update(links, nodes) {
        link = svg.selectAll(".link")
            .data(links)
            .enter()
            .append("line")
            .attr("class", "link")
            .attr('marker-end','url(#arrowhead)')
            .attr('fill', '#aaa');
        // console.log(this.link);

        link.append("title")
            .text(function (d) {return d.type;});

        edgepaths = svg.selectAll(".edgepath")
            .data(links)
            .enter()
            .append('path')
            .attr('class', 'edgepath')
            .attr('fill-opacity', 0)
            .attr('stroke-opacity', 0)
            .attr('id', function (d, i) {return 'edgepath' + i}
            )
            .style("pointer-events", "none");

        edgelabels = svg.selectAll(".edgelabel")
            .data(links)
            .enter()
            .append('text')
            .style("pointer-events", "none")
            .attr('class', 'edgelabel')
            .attr('id', function (d, i) {return 'edgelabel' + i})
            .attr('font-size', 10)
            .attr('fill', '#aaa');

        edgelabels.append('textPath')
            .attr('xlink:href', function (d, i) {return '#edgepath' + i})
            .style("text-anchor", "middle")
            .style("pointer-events", "none")
            .attr("startOffset", "50%")
            .attr('fill', '#f00')
            .text(function (d) {return d.type});

        node = svg.selectAll(".node")
            .data(nodes)
            .enter()
            .append("g")
            .attr("class", "node")
            .call(d3.drag()
                    .on("start", this.dragstarted)
                    .on("drag", this.dragged)
                .on("end", this.dragended)
            );

        node.append("circle")
            .attr("r", 5)
            .style("fill", "#3333dd")

        node.append("title")
            .text(function (d) {return d.id;});

        node.append("text")
            .attr("dy", -3)
            .text(function (d) {return d.name+":"+d.label;});

        // console.log(this.link);
        simulation
            .nodes(nodes)
            .on("tick", this.ticked);

        simulation.force("link")
            .links(links);
    }

    ticked() {
        // console.log(this.link);
        link
            .attr("x1", function (d) {return d.source.x;})
            .attr("y1", function (d) {return d.source.y;})
            .attr("x2", function (d) {return d.target.x;})
            .attr("y2", function (d) {return d.target.y;});

        node
            .attr("transform", function (d) {return "translate(" + d.x + ", " + d.y + ")";});

        edgepaths.attr('d', function (d) {
            return 'M ' + d.source.x + ' ' + d.source.y + ' L ' + d.target.x + ' ' + d.target.y;
        });

        edgelabels.attr('transform', function (d) {
            if (d.target.x < d.source.x) {
                var bbox = this.getBBox();

                let rx = bbox.x + bbox.width / 2;
                let ry = bbox.y + bbox.height / 2;
                return 'rotate(180 ' + rx + ' ' + ry + ')';
            }
            else {
                return 'rotate(0)';
            }
        });
    }

    dragstarted(d) {
        // console.log(d3.active);
        if (!d3.active) simulation.alphaTarget(0.3).restart()
        d.fx = d.x;
        d.fy = d.y;
    }

    dragged(d) {
        d.fx = d.x;
        d.fy = d.y;
       // console.log(d.y);
    }

    dragended(d) {
        if (!d3.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;

    }

    render(){
       let { data } = this.props;
       // <p>albastru{data.vertices.length}</p>

        return <div>
            <svg className="my-canvas" width="960" height="600"></svg>
        </div>;
    }
}

export default DrawPetriGraph;
