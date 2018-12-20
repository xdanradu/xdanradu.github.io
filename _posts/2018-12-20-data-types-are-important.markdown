---
layout: post
title:  "Data types are important"
date:   2018-12-20 15:00:00 +0300
categories: oop
---


Imagine you work on a software system that responds to the user with a really long delay.
A reasonable frontend laods the data in less than 1.5 seconds. 

Delays in a software system can have various causes like complex database scripts, backend data processing or frontend rendering. 

Your task is to boost the system's performance. 

By debugging and measuring execution time you can easily identify the module that introduces the delay and then try to optimize the code.

Below you have a simple sum computation algorithm that has a really high impact on performance. Take a mopment to spot it's main flaw:

```java
public class Test{
    public static void main(String[] args){
        long startTime = System.nanoTime();    
        
        Long sum=0L;
        for(int i=0;i<Integer.MAX_VALUE;i++){
            sum+=i;
        }  

        long estimatedTimeInMs = (System.nanoTime() - startTime)/1000000;
        System.out.println(estimatedTimeInMs);//7.5 seconds
    }
}
```

__Cause:__ By using __Long__ we actually instruct the JVM to create new instances for the sum variable with each addition in the loop. 
__Solution:__ The sum can be computed in around 600 ms by just using __long__ primitive insted of the wrapper class __Long__. 

There is no strict rule that tells us to always use primitives but you should pay attention to what variable types suits your performance requirements best.

