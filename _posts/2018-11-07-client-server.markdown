---
layout: post
title:  "Client-Server architecture"
date:   2018-11-07 15:00:00 +0300
categories: design patterns
---

<br>![calc](/images/client-server.png){:class="img-responsive"}

[Source code for the example](https://github.com/xdanradu/SourceCode/tree/master/client-server-java)

```java

public class App {

	public static void main(String[] args) {
		
		Component b=new Component("B", "localhost", 4242);
		b.startServer();
		
		Component c=new Component("C", "localhost", 4243);
		c.startServer();
		
		Component a=new Component("A", "localhost", 2000);
		
		a.sendMessageTo(b, "Message 1 from A to B");
		b.sendMessageTo(c, "Message from B to C");
		a.sendMessageTo(b, "Message 2 from A to B");
		c.sendMessageTo(b, "Message from C to B");

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
		System.out.println("Starting server for Component "+this.NAME+" on Thread (id: "+server.getId()+")");
		server.start();
	}
	
	public void sendMessageTo(Component destination, String message) {
		new Client(destination.getHostName(), destination.getPort(), message).start();
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
	
	public Server(int port){
		this.PORT = port;
	}
	
	public void run(){
		ServerSocket s = null;
		try {
			s = new ServerSocket(PORT);
			while (true){	
				System.out.println("Server Thread (id: "+this.getId()+ ") is waiting for connections");
				Socket socket = null;
				socket = s.accept();
				ConnectionManager connection = new ConnectionManager(socket);
				System.out.println("Server Thread (id: "+this.getId()+ ") is starting a Connection Manager Thread (id: "+connection.getId()+")");
				connection.start();
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		} finally{
			try {
				s.close();
			} catch (IOException ex2) {
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

	Socket socket;
	BufferedReader in;
	PrintWriter out;

	public ConnectionManager(Socket s) {
		this.socket = s;
		try {
			in = new BufferedReader(new InputStreamReader(this.socket.getInputStream()));
			out = new PrintWriter(new BufferedWriter(new OutputStreamWriter(this.socket.getOutputStream())), true);
		} catch (Exception ex) {
		}
	}

	public void run() {
		try {
			String line = "";
			while(line!="STOP"){
				line = in.readLine();
				if(line!="STOP"){
					System.out.println("Connection Mannager Thread (id: "+this.getId()+") RECEIVED >> "+line);
					out.println("Message from Thread (id: "+this.getId()+") ACK for: "+line);
				} else {
					in.close();
					out.close();
					socket.close();
				}	
			}
		} catch (Exception ex) {
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
	
	private final String HOST_NAME;
	private final int PORT;
	private String message;
	
	public Client(String hostName, int port, String message) {
		this.PORT=port;
		this.HOST_NAME = hostName;
		this.message = message;
	}

	public void run() {
		try {
			Socket socket = new Socket(this.HOST_NAME, this.PORT);
			BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
			PrintWriter out = new PrintWriter(new BufferedWriter(new OutputStreamWriter(socket.getOutputStream())),
					true);
			String line = "";
			out.println(this.message);
			line = in.readLine();
			System.out.println("Client (id:"+this.getId()+") RECEIVED >> "+line);
			out.println("STOP");
			line = in.readLine();
			System.out.println("Client (id:"+this.getId()+") RECEIVED >> "+line);
		} catch (Exception ex) {
		}
	}
}

```
