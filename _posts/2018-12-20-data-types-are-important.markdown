---
layout: post
title:  "Data types are important"
date:   2018-12-20 15:00:00 +0300
categories: performance
---


Imagine you work on a software system that has a really high response time.
A reasonable frontend loads the data in less than 1.5 seconds. 
Delays can be introduced in various parts of a system. Some of the most common places to investigate are: complex database scripts, backend data processing or frontend rendering. 

By debugging and measuring execution time we can easily identify the module that introduces the delay and then try to optimize the code.

Let's say that we identified that the simple sum computation algorithm below is the root cause for poor performance. 
Your task is to boost the system's performance, take a moment to spot it's main flaw:

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

__Cause:__ By using __Long__ we actually instruct the JVM to create new instances for the sum object with each addition in the loop. This means that we allocate memory inneficiently.

__Solution:__ The delay can be drastically reduced from 7.5 s to around 650 ms by just using __long__ primitive insted of the wrapper class __Long__. This means that we allocate only one memory space for the sum variable and we overwrite it with each addition.

There is no strict rule that tells us to always use primitives but you should pay attention to what variable types suits your performance requirements best.

