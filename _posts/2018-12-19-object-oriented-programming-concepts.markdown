---
layout: post
title:  "Object Oriented Programming Concepts (in progress)"
date:   2018-11-09 15:00:00 +0300
categories: oop
---

# Class

A class describes an object based on its characteristics and behaviour. We can model real life objects using classes (ex: cars, phones, dogs, bicycles, etc).

A class can be defined as:
- The object blueprint
- The object template
- The model or mold that is used to create software objects

For example, if we develop a car racing game, we might use a Car class to create different cars with various characteristics. A simple starting approach can be:

```java

public class Car {

    private String name;
    private int speed;

    public Car(String name, int speed) {
        this.name = name;
        this.speed = speed;
    }

    public void accelerate(){
        this.speed++;
    }

    public void decelerate(){
        this.speed--;
    }

    public int getInfo(){
        return "Name: "+this.name+" Speed: "+this.speed;
    }
}

```

# Object

Objects are complex variables that have state and behaviour.

Real life objects (ex. dog, car, phone) can be modeled using software objects. Both of them are defined through their characteristics and behaviour. For example a car has a name and speed (this is the state) and can accelerate/decelerate (behaviour). 

The characteristics of an object (like name, color, weight, etc) refer to the object's state and the methods through which the object interacts with the outside world is known as the object behaviour.

The object models (defiend in classes) can have different levels of precision (the simplified version or the starting point for a __Car__ is presented in the previous section). 

Each object from can hold its own values for the instance variables of that class. In the __Car__ example the instance variables are __name__ and __speed__.

An object is instantiated or created using the new operator. 

An object is initialised using the class constructor. Each object will specify its state using the class constructor.

The constructor is a public method that has the same name as the class and no return type (ex:__public Car(String name, int speed)__)
allows us to initialise object's state.  

Example of object instatiation using a constructor:

```java
Car vw = new Car("Volkswagen Golf", 70);
```

Above we specify the object type (Car) the object name(vw) and we create it with the new operator, specifying its initial state through the constructor. This means that vw object's name will be "Volkswagen Golf" and it's speed 70.

# Abstract Class

# Interface

An interface represents the contract between the object and the outside world.

It contains only method declarations, without implementations.

A class that implements an interface must implement all the interface's methods.

Interfaces are useful for code extensibility and testing. 

```java
public interface Vehicle {

    public void accelerate();

    public void decelerate();

}

public class Car implements Vehicle{
    // we have to provide here concrete implementations for accelerate 
    // and decelerate methods declared in the Vehicle interface 
    // see Class section for an example
}
```


# Instance vs class variables

Both types of variables are assoociated with a class. 

__Instance variables__ belong the the instances (objects) of the class. They are specific to each object of that class. Each object has its own specific copy of that variable. Changes made to an instance variable are visible only in the object instance and not in all the objects instances created from a particular class.

```java
public class Car {
    public int speed;
}

public App{
    public static void main(String[] args){
        Car bmw = new Car();
        Car audi = new Car();

        bmw.speed = 50;
        audi.speed = 120;

        System.out.println(bmw.speed);//prints 50
        System.out.println(audi.speed);//prints 120
    }
}
```

__Class variables__ are known as __static variables__. A static variable is shared among all instances of the class. This means that JVM allocates only one memory space for the static variable for all the objects created from that class. If we change a static variable's value, the change will be reflected in all the objects created from that class. 

```java
public class Car {
    public static int speed;
}

public App{
    public static void main(String[] args){
        Car bmw = new Car();
        Car audi = new Car();

        bmw.speed = 50;
        audi.speed = 120;

        System.out.println(bmw.speed);//prints 120
        System.out.println(audi.speed);//prints 120
    }
}
```