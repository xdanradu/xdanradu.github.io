---
layout: post
title:  "Client-Server architecture"
date:   2018-11-07 15:00:00 +0300
categories: design patterns
---

<br>![calc](/images/client-server.png){:class="img-responsive"}

[Source code](https://github.com/xdanradu/SourceCode/tree/master/client-server-java)

```java

public class App {
	
	public static void main(String[] args) {
		
		int delayInMillis = 0;
		ThreadHelper.monitorThreadsAfter(delayInMillis);
		
		Component b = new Component("B", "localhost", 4242);
		b.startServer();

		Component c = new Component("C", "localhost", 4243);
		c.startServer();

		Component a = new Component("A", "localhost", 2000);

		a.sendMessageTo(b, "Message 1 from A to B");
		b.sendMessageTo(c, "Message from B to C");
		a.sendMessageTo(b, "Message 2 from A to B");
		c.sendMessageTo(b, "Message from C to B");
		
		delayInMillis = 1000;
		ThreadHelper.monitorThreadsAfter(delayInMillis);
	}
	
}

```

```java

public class Component {
	
	private final int HOST_PORT;
	private final String HOST_NAME;
	private final String NAME;
	
	public Component(String name, String serverAddress, int port){
		this.HOST_PORT = port;
		this.NAME = name;
		this.HOST_NAME = serverAddress;
	}
	
	public void startServer() {
		Server server = new Server(this.HOST_PORT);
		System.out.println("Starting Server for Component "+this.NAME+" on Thread (id: "+server.getId()+")");
		server.start();
	}
	
	public void sendMessageTo(Component destination, String message) {
		Client client = new Client(destination.getHostName(), destination.getPort(), message);	
		System.out.println("Starting Client for Component "+this.NAME+" on Thread (id: "+client.getId()+")");
		client.start();
	}
	
	private int getPort() {
		return this.HOST_PORT;
	}
	
	private String getHostName() {
		return this.HOST_NAME;
	}
	
}

```

```java

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;

public class Server extends Thread {

	private final int PORT;
	private ServerSocket serverSocket;

	public Server(int port) {
		this.PORT = port;
		try {
			serverSocket = new ServerSocket(this.PORT);
		} catch (Exception ex) {
			System.out.println(ex.getMessage());
		}
	}

	public void run() {

		try {
			while (true) {
				System.out.println("Server Thread (id: " + this.getId() + ") is waiting for connections");
				Socket socket = null;
				socket = serverSocket.accept();
				ConnectionManager connection = new ConnectionManager(socket);
				System.out.println("Server Thread (id: " + this.getId()
						+ ") is starting a Connection Manager Thread (id: " + connection.getId() + ")");
				connection.start();
			}

		} catch (Exception ex1) {
			System.out.println(ex1.getMessage());
		} finally {
			try {
				serverSocket.close();
			} catch (IOException ex2) {
				System.out.println(ex2.getMessage());
			}
		}
	}

}

```


```java

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.net.Socket;

public class ConnectionManager extends Thread {

	private Socket socket;
	private BufferedReader in;
	private PrintWriter out;

	public ConnectionManager(Socket socket) {
		this.socket = socket;
		try {
			in = new BufferedReader(new InputStreamReader(this.socket.getInputStream()));
			out = new PrintWriter(new BufferedWriter(new OutputStreamWriter(this.socket.getOutputStream())), true);
		} catch (Exception ex) {
			System.out.println(ex.getMessage());
		}
	}

	public void run() {
		try {
			String receivedMessage = "";
			while (!receivedMessage.equals("STOP")) {
				receivedMessage = in.readLine();
				System.out.println("Connection Mannager Thread (id: " + this.getId() + ") REC >> " + receivedMessage);
				out.println("Message from Thread (id: " + this.getId() + ") ACK for: " + receivedMessage);
			}
			in.close();
			out.close();
			socket.close();
		} catch (Exception ex) {
			System.out.println(ex.getMessage());
		}
	}
}

```

```java

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.net.Socket;

public class Client extends Thread{
	
	private Socket socket;
	private BufferedReader in;
	private PrintWriter out;
	private final String HOST_NAME;
	private final int PORT;
	private String messageToSend;
	
	public Client(String hostName, int port, String message) {
		this.PORT = port;
		this.HOST_NAME = hostName;
		this.messageToSend = message;
		try {
			socket = new Socket(this.HOST_NAME, this.PORT);
			in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
			out = new PrintWriter(new BufferedWriter(new OutputStreamWriter(socket.getOutputStream())),
					true);	
			} catch(Exception ex) {
				System.out.println(ex.getMessage());
			}
	}

	public void run() {

		try {
			out.println(this.messageToSend);
			String receivedMessage = "";
			receivedMessage = in.readLine();
			System.out.println("Client (id:"+this.getId()+") REC >> "+receivedMessage);
			out.println("STOP");
			receivedMessage = in.readLine();
			System.out.println("Client (id:"+this.getId()+") REC >> "+receivedMessage);			
		} catch (Exception ex) {
			System.out.println(ex.getMessage());
		}
		
	}
}

```


```java

public class ThreadHelper {

	public static void monitorRunningThreads() {
		
		int numberOfRunningThreads = 0;
		System.out.println("RUNNING Threads");
		for (Thread t : Thread.getAllStackTraces().keySet()) {
			if (t.getState() == Thread.State.RUNNABLE) {
				numberOfRunningThreads++;
				System.out.println("Id: " + t.getId() + " " +t.getClass());
			}
		}
		System.out.println("Number of running threads: " + numberOfRunningThreads);
	}
	
	public static void monitorThreadsAfter(int delayInMillis) {
		try {
		    Thread.sleep(delayInMillis);
		    monitorRunningThreads();
		} catch(InterruptedException ex) {
		    System.out.println(ex.getMessage());
		}
	}

}

```