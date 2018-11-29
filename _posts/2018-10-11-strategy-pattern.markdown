---
layout: post
title:  "Strategy pattern"
date:   2018-10-11 15:00:00 +0300
categories: design patterns
---

<br>![calc](/images/strategy.png){:class="img-responsive"}

Components:
- __Strategy interface__ (_ProfitEstimationStrategy_)
- __Concrete implementations__ of the strategy interface (_SwitzerlandStrategy_ and _JapanStrategy_)
- __Strategy usage context__ (_BankingModule_) is the module that uses the Strategy interface without any reference tot its concrete implementations
- An __application__ (_App_) that uses the above components

Strategy pattern provides a flexible way to define multiple and interchangeable algorithms that do specific tasks (ex: sorting, compression, domain specific computations).
The main advantage of this pattern is code extensibility (Open/Closed principle).

The following example shows you how to implement the Strategy Pattern in Java for a banking application that supports two ways of computing profit.

__Strategy interface__
```java
public interface ProfitEstimationStrategy {

  public void compute(ArrayList<Account> accounts);

}
```

__Strategy concrete implementation 1__
```java
public class Switzerland implements ComputationStrategy {

  public void compute(ArrayList<Accounts> accounts) {
    // Switzerland algorithm
  }

}
```

__Strategy concrete implementation 2__
```java
public class Japan implements ComputationStrategy {

  public void compute(ArrayList<Accounts> accounts) {
    // Japan algorithm
  }

}
```

__Strategy usage context module__
```java
public class BankingModule {

  private ProfitEstimationStrategy strategy;

  public void setStrategy(ProfitEstimationStrategy strategy) {
    this.strategy = strategy;
  }

  public void computeProfit(ArrayList<Accounts> accounts) {
    strategy.compute(accounts);
  }

}
```
The BankingModule module only references the ProfitEstimationStrategy interface but not the concrete implementations. This allows us to specify
the concrete strategy on the __application__ runtime:

```java
public class App {

  public static void main(String[] args) {

    BankingModule system = new BankingModule();
    system.setStrategy(new JapanStrategy());
    // Retrieve the accounts list from the DB
    system.computeProfit(accounts);

  }

}
```