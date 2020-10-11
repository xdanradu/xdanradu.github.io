import React, {Component} from "react";
import "./skills.scss";
import "../../resources/styles/prism.css";
import AccordionItem from "../../components/accordion-item/accordion-item";
import SOLID from "../../data/solid";

class Skills extends Component {
    render() {

        return (
            <div className="skills-container">
                <h1>SOLID Principles</h1>
                {SOLID.map((item) => (<AccordionItem key={item.title} data={item}/>))}
            </div>
        );
    }
}

export default (Skills);
