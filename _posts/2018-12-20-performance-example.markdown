---
layout: post
title:  "Object Oriented Programming Concepts"
date:   2018-12-20 15:00:00 +0300
categories: oop
---


The following example can be drastically improved. Take a moment to find a possible way to spot its main flaw:

```java
public class Test{
    public static void main(String[] args){
        long startTime = System.nanoTime();    
        
        Long sum=0L;
        for(int i=0;i<Integer.MAX_VALUE;i++){
            sum+=i;
        }  

        long estimatedTimeInMs = (System.nanoTime() - startTime)/1000000;
        System.out.println(estimatedTimeInMs);
    }
}
```

I executed the code in the example above in around 7.5s on my local machine. 

The sum can be computed in around 600 ms by just using __long__ primitive insted of the wrapper class __Long__. 

By using __Long__ we actually instruct the JVM to create new instances for the sum variable with each addition in the loop. 

There is no strict rule that tells us to always use primitives but you should always think what type of variable suits your performance requirements.

