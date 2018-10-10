---
layout: post
title:  "Coding best practices 2"
date:   2018-10-10 15:00:00 +0300
categories: coding best practices
---

In this post I will share with you an OOP principle that is very useful to understand and apply in your projects:

# Data encapsulation

Let's take the following example:

```java
public class BankingSystem {

  public String getInfo(String userName, String userAddress, String accountIBAN, int accountBalance) {
    return "Name: "+name+" Address: "+address+" Account balance:"+accountBalance;
  }

}
```

We can spot multiple problems with this code. The arguments list is quite long and that's a sign that we should think about encapsulation.

If we have to include a new argument in the future we will have to change the arguments list but also all the function calls (that could be in multiple places/files).
What we can do to improve the code quality is to encapsulate the arguments list into objects.  

We should aim for a maximum of three arguments per function.

When we have to change the __getInfo__ function in the future  we should make the modification in as few places as possible.

The refactored code:

```java
public class Account {
  public String IBAN;
  public int balance;
  public User user;
}

public class User {
  public String name;
  public String address;
}

public class BankingSystem {

  public String getInfo(Account account) {
    return "Name: "+account.user.name+" Address: "+account.user.address+" Balance:"+account.balance+" IBAN: "+account.IBAN;
  }

}

```

In this example by encapsulating data into objects you ensure that the code is open for extension and closed for modification ( [open-closed principle](https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle) )

For example, if we want to include the account currency to the __getInfo__ function we will only have to add the required parameter to the Account class and use it inside the function:

```java
public class Account {
  public String IBAN;
  public int balance;
  public Currency currency;
  public User user;
}

public class User {
  public String name;
  public String address;
}

public class BankingSystem {

  public String getInfo(Account account) {
    return "Name: "+account.user.name+" Address: "+account.user.address+" Balance:"+account.balance+" IBAN: "+account.IBAN+" Currency: "+account.currency;
  }

}

```
