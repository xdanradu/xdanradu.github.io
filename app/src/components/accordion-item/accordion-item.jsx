import React, {Component} from "react";
import "./accordion-item.scss";
import Prism from "prismjs";

function AccordionItemCode(props) {
    let {code} = props;
    if (code) return <pre style={{display: "none"}} id="solid"><code className="language-javascript">{code}</code></pre>;
    return "";
}
function AccordionItemToggleButton(props) {
    let {display} = props;
    if (display) return <i id="solid-icon" className="fa fa-angle-down"></i>;
    return "";
}


class AccordionItem extends Component {
    componentDidMount() {
        Prism.highlightAll();
    }

    toggle(id) {
        let container = document.getElementById(id);
        let containerIcon = document.getElementById(id + '-icon');
        if (container.style.display === "none") {
            container.style.display = "block";
            container.style.opacity = "1";
            containerIcon.className = 'fa fa-angle-up';

        } else {
            container.style.display = "none";
            container.style.opacity = "0";
            containerIcon.className = 'fa fa-angle-down';
        }
    }

    render() {
        let {data} = this.props;
        return (<div>
            <h2>{data.title} <span onClick={(e) => this.toggle('solid')}>
                    <AccordionItemToggleButton display={data.code&&data.code.length>0?true:false}/></span>
            </h2>
            <AccordionItemCode code={data.code}/>
        </div>);
    }
}

export default (AccordionItem);
