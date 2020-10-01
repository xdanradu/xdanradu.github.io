import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters rendered");
    const { onCreate, onReset, onDelete, onIncrement, counters } = this.props;
    return (
      <div>
          <button className="action-btn" onClick={onCreate}>
              Create
          </button>
        <button className="action-btn" onClick={onReset}>
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            className="m-3"
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default (Counters);
