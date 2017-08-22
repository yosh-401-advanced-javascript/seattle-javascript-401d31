![cf](http://i.imgur.com/7v5ASc8.png) 07: HTTP and REST APIs
===

## HTTP Resources
* skim [nodejs http module]
* skim [wiki list of header fields]
* read [what is a rest api?]

## Learning Objectives
* students will be able to identify qualities of the HTTP protocol
* students will be able to implement an HTTP server using Nodejs

## HTTP
The Hyper Text Transfer Protocol (HTTP) is a stateless request-response application layer protocol. HTTP is used to build distributed, collaborative, hypermedia information systems. HTTP is the foundation for the world wibe web. Applications built using HTTP subscribe to the client-server computing model. In the client-server computing model servers are designed to listen for requests, and respond. The HTTP specification defines how requests and responses should be formated, but not what information they should contain. HTTP is often associated with serving `.html` files but also used to transfer images, videos, json, xml, binary executables, and much more. 

#### HTTP Requests
A HTTP/1.1 request is formated in text and transfered using TCP. The first line of the request contains the `METHOD`, `URL`, and `HTTP VERSION` of the request. The folowing lines are the request `HEADERS`. Each header is seporated by a newline character. A header is a key value pair seporated using a colon. Headers containing more than one value seporate each value using a semicolon. The headers are termaned with an empty line. An optional body follows the headers.

###### Example HTTP Request  
``` 
POST /api/note HTTP/1.1
Host: api.example.com
Origin: www.example.com
Authorization: Beader bHVsIHRoaXMgaXMgYSBmYWtlIHNlY3JldCB0b2tlbg==
Accept: application/json
Content-Type: application/json; charset=UTF-8
Content-Length: 58

{"title":"kata","content":"get 100 points on hacker rank"}
```

#### HTTP Response
A HTTP/1.1 response is also formated in text and transfered using TCP. The first line of the response contains the `HTTP VEERSION`, `STATUS CODE`, and `STATUS MESSAGE`. The folowing lines are the request headers and are formated exactly the same way as the request headers. The headers are terminated with an empty line. An optional body follows the headers.

###### Example HTTP Response
```
HTTP/1.1 200 OK
Date: Tue, 22 Aug 2017 06:34:16 GMT
Content-Type: application/json; charset=UTF-8
Content-Encoding: UTF-8
Content-Length: 82
Last-Modified: Mon, 21 Aug 2017 12:10:38 GMT
Server: Apache/1.3.3.7 (Unix) (Red-Hat/Linux)
ETag: "3f80f-1b6-3e1cb03b"
Connection: close

{"id":"1234123412341324","title":"kata","content":"get 100 points on hacker rank"}
```

<!--links -->
[nodejs http module]: https://nodejs.org/api/http.html
[what is a rest api?]: https://medium.com/@lazlojuly/what-is-a-restful-api-fabb8dc2afeb#.nm7uiiltt
[wiki list of header fields]: https://en.wikipedia.org/wiki/List_of_HTTP_header_fields#Request_fields
