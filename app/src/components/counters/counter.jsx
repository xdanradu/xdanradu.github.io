import React, { Component } from "react";


class Counter extends Component {
  render() {
      let {counter, onIncrement, onReset, onDelete, onCreate} = this.props;
    console.log("Counter rendered");
    return (
      <React.Fragment>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>


          <button className="action-btn" onClick={() => onIncrement(counter)}><i className="fa fa-plus"></i></button>
          <button className="action-btn" onClick={() => onDelete(counter.id)}><i className="fa fa-remove"></i></button>


      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-3 p-3 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}



export default Counter;
