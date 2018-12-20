---
layout: post
title:  "Object Oriented Programming Concepts"
date:   2018-12-19 15:00:00 +0300
categories: oop
---

1. [What is a class?](#class)
2. [What is an object?](#object)
3. [What is an abstract class?](#abstract-class)
4. [What is an interface?](#abstract-class)
5. [Instance vs class variables](#instance-vs-class-variables)
6. [What is a package?](#package)

# Class

A class describes the characteristics and behaviour of real life objects (ex: cars, phones, dogs, bicycles, etc).

A class can be defined as:
- The object blueprint
- The object template
- The model or mold that is used to create software objects

For example, if we develop a car racing game, we might use a __Car__ class to create different cars with various characteristics. A simple starting approach can be:

```java

public class Car {

    private String name;
    private int speed;

    public Car() {
        this.name = "";
        this.speed = 0;
    }

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

Above, besides the Car's behaviour (accelerate/decelerate) we included two constructors. A constructor is a public method, that has the same neame as the class and no return type, used for object's state initialization. We can have multiple constructors in a class. The only difference in the method signature being the list of input arguments. In our example we have a default constructor, with no input arguments, and a second constructor that takes name and speed as inputs.

# Object

Objects are complex variables that have a specific state and behaviour. For example a concrete car has a specific name and speed (this is the state) and can accelerate/decelerate (this is the behaviour). 

The characteristics of an object (like name, color, weight, etc) refer to the object's state and the methods through which the object interacts with the outside world is known as the object behaviour. The public methods have access to the internal object state.

The object templates (defined in classes) can have different levels of precision. A simplified version for a __Car__ object is presented in the previous section. 

Each object holds its own values for the instance variables of that class (instance = object, see the difference between instance and class variables). In the __Car__ example the instance variables are __name__ and __speed__.

An object is instantiated/created using the __new__ operator. 

An object's state is initialised using the class __constructor__.

 

Example of object instatiation using a constructor:

```java
Car vw = new Car("Volkswagen Golf", 70);
```

Above we specify the object type (Car) the object name(vw) and we create it with the new operator, specifying its initial state through the constructor. This means that vw object's name will be "Volkswagen Golf" and it's speed 70.

# Abstract Class

An abstract mehtod is a method declared without an implementation with the abstract keyword in front.

An abstract class includes abstract methods.

A class that contains one or more abstract methods must be declared as abstract.

Abstract classes can be extended.

If a class extends an abstract class it usually implements the parent's abstract methods. 

# Interface

An interface represents the contract between an object and the outside world.

It contains only method declarations, without implementations.

A class that implements an interface must implement all the interface's methods.

Interfaces are useful for code extensibility and testing. 

When a class implements an interface, it promises to provide the behavior specified in that interface.

```java
public interface Vehicle {

    public void accelerate();

    public void decelerate();

}

public class Car implements Vehicle{
    // here we have to provide a concrete implementations for accelerate 
    // and decelerate methods declared in the Vehicle interface 
    // see Class section for an example
}
```


# Instance vs class variables

Both types of variables are assoociated with a class. 

## Instance variables

They are specific to each object. 

Changes made to an instance variable affect only one object and not all the objects of the same class.

```java
public class Car {
    public int speed; // instance variable
}

public App{
    public static void main(String[] args){
        Car bmw = new Car();
        Car audi = new Car();

        bmw.speed = 50;
        audi.speed = 120;

        System.out.println(bmw.speed); // prints 50
        System.out.println(audi.speed); // prints 120
    }
}
```

## Class variables 
Are known as __static variables__. A static variable is shared among all instances of the class. This means that JVM allocates only one memory space for the static variable for all the objects created from that class. If we change a static variable's value, the change will be reflected in all the objects created from that class. 

```java
public class Car {
    public static int speed; // static variable
}

public App{
    public static void main(String[] args){
        Car bmw = new Car();
        Car audi = new Car();

        bmw.speed = 50;
        audi.speed = 120;

        System.out.println(bmw.speed); // prints 120
        System.out.println(audi.speed); // prints 120
    }
}
```

# Package

A package is namespace for grouping related classes and interfaces in a logical manner.
It is simillar to a folder structure in windows/linux.

# References
1. [Oracle's Java Tutorial](#https://docs.oracle.com/javase/tutorial/java/index.html)
2. [Head First Java](#https://www.oreilly.com/library/view/head-first-java/0596009208/)