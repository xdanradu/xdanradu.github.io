import React, { Component } from 'react';
import './shop.scss';
import Card from '../../components/card/card';

class Shop extends Component {
  render() {
    let { counters, onIncrement } = this.props;
    return (
      <div className="card-container">
        <Card
          position="01"
          title="JavaScript"
          description="Angular, React, jQuery, NodeJS"
          counter={counters[0]}
          onIncrement={onIncrement}
        />
        <Card
          position="02"
          title="HTML/CSS"
          description="Responsive UI"
          counter={counters[1]}
          onIncrement={onIncrement}
        />
        <Card
          position="03"
          title="Java"
          description="Spring boot, JWT, Hibernate, Flyway"
          counter={counters[2]}
          onIncrement={onIncrement}
        />
        <Card
          position="04"
          title="C#"
          description="WCF, Rest API, 3 Tier Architecture"
          counter={counters[3]}
          onIncrement={onIncrement}
        />
        <Card
          position="05"
          title="SQL"
          description="PosgreSQL, SQL Server, MySQL, Stored Procedures, Triggers"
          counter={counters[4]}
          onIncrement={onIncrement}
        />
      </div>
    );
  }
}

export default Shop;
