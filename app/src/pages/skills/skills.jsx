import React, { Component } from "react";
import "./skills.scss";
import Prism from "prismjs";
import "../../resources/styles/prism.css";

class Skills extends Component {

    componentDidMount() {
        Prism.highlightAll();
    }

    toggle(id) {
        var containerId = document.getElementById(id);
        var containerIcon = document.getElementById(id+'-icon');
        if (containerId.style.display === "none") {
            containerId.style.display = "block";
            containerId.style.opacity = "1";
            containerIcon.className = 'fa fa-angle-up';

        } else {
            containerId.style.display = "none";
            containerId.style.opacity = "0";
            containerIcon.className = 'fa fa-angle-down';
        }
    }

    render() {
        return (
            <div className="skills-container">
                <h1>SOLID Principles</h1>

                <h2><strong>S</strong>ingle Responsibility</h2>
                <h2><strong>O</strong>pen/Closed</h2>
                <h2><strong>L</strong>iskov Substitution</h2>
                <h2><strong>I</strong>nterface Segregation</h2>
                <h2><strong>D</strong>ependency Inversion <span onClick={(e) => this.toggle('solid')}><i id="solid-icon" className="fa fa-angle-down"></i></span></h2>

                <pre style={{display: "none"}} id="solid">
  <code  className="language-javascript">
  {`class StripePaymentMethod {
  
  constructor(user) {
    this.stripe = new Stripe(user); 
  }

  pay(product){
    this.stripe.pay(product);
  }
}

class Stripe {
  constructor(user) {
    this.user = user;
  }

  pay(product) {
    console.log(\`\${this.user.name} payed \${product.price} for \${product.name} with Stripe\`);
  }
}

class PaypalPaymentMethod {
  
  constructor(user) {
    this.paypal = new Paypal(); 
    this.user = user;
  }

  pay(product){
    this.paypal.pay(this.user, product);
  }
}

class Paypal {
  pay(user, product) {
    console.log(\`\${user.name} Payed \${product.price} for \${product.name} with Paypal\`);
  }
}

class Checkout {
  constructor(paymentMethod){
    this.paymentMethod = paymentMethod;
  }

  purchase(product) {
    this.paymentMethod.pay(product);
  }

  purchaseWithDiscount(product) {
    product.price = product.price/2;
    this.paymentMethod.pay(product);
  }

}

//const checkout = new Checkout(new StripePaymentMethod({name:'John'}));
const checkout = new Checkout(new PaypalPaymentMethod({name:'John'}));

checkout.purchase({name: 'bike', price: 100});

  `}
  </code>
</pre>

                
                
                
                
            </div>
        );
    }
}

export default (Skills);
