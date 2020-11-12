import React, {Component} from "react";
import './petri-graph.scss';
import PetriGraphService from "./petri-graph.service";
import DrawPetriGraph from "./draw-petri-graph";

class PetriGraph extends Component {

    render() {

        let transitions = [{'id': 0, 'name': 't1', t1:2, t2: 3},
            {'id': 1,'name': 't2', t1:1, t2: 3}, {'id': 2, 'name': 't3', t1:2, t2: 7},
            {'id': 3, 'name': 't4', t1:4, t2: 5}];

        let places = [{'id':0, 'name':'p1'},{'id':1, 'name':'p2'},
            {'id':2, 'name':'p3'}, {'id':3, 'name':'p4'}, {'id':4, 'name':'p5'}];

        let pre = [
            [1, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1],
            [0, 0, 0, 1]
        ];

        let post = [
            [0, 0, 0, 1],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 1, 0]
        ];

        let initialMarking = { 'name':'M0', 'tokens':[1,0,0,0,0], 'label':'new' };
        let N = {places: places, transitions: transitions, pre: pre, post: post};
        let service = new PetriGraphService(N, initialMarking);
        let result = service.get();
        return <div>
            <DrawPetriGraph data={result}/>
        </div>
    }
}
export default PetriGraph;
