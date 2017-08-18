![cf](https://i.imgur.com/7v5ASc8.png) Lab 06: TCP Chat Server
======

## Submission Instructions
  * fork this repository & create a new branch for your work
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

## Learning Objectives  
* students will understand how to implement a TCP server using the `net` module
* students will understand how to work with node.js EventEmitter's

## Requirements


#### OSI Model  
| Layer | Protocol Data Unit | Function | Examples |   
| ---- | ----- | ----- | ----- |
| Application | Data | Hight Level APIs | HTTP, IMAP, POP, SSH |  
| Presintation | Data | Data translating, including encryption, character encoding, and compression | Strings encoded with null terminated strings vs Strings defined by an Integer Length |  
| Session | Data | Manages a session though passing data back and fourth | NetBios and Remote Procedure Protocol (RPC) |
| **Transport** | Segment / Datagram | Reliable transmision of data between points on a network | TCP and UDP | 
| Network | Packet | Managing the network thourgh addressing, routing, and trafic controll | IP and ICMP 
| Data Link | Frame | Reliable transmision of frames beteen to physical layer nodes | Ethernet and IEEE 802.11 wireless LAN | 
| Physical | bit | transmission and reception of raw data streams over a physical medium | USB, Bluetooth, Ethernet physical layer, SMB, Telephone newtwork modem |


#### TCP 
#### UDP


#### Configuration  
<!-- list of files, configurations, tools, etc that are required -->
Your lab directory must include  
* `.gitignore`
* `.eslint`
* `package.json`
* `README.md`

#### Feature Tasks  
* create a TCP Server using the NodeJS native `net` module
* create a `Client` Constructor
* when sockets connect to the server, a new `Client` instance should be made
* all clients should have a unique `id` property - this should come from the use of `node-uuid`
* when sockets are connected with the client pool they should be given event listeners for `data`, `error`, and `close` events
 * when a socket emits the `close` event, the socket should be removed from the client pool
 * when a socket emits the `error` event, the error should be logged on the server
 * when a socket emits the `data` event, the data should be logged on the server and the commands below should be implemented

## Custom commands
* `@all` should trigger a broadcast event
* `@nickname` should allow a user change their nickname
* `@dm` should allow a user to send a message directly to another user by nick name or by their guest id _(unique client id)_
* when a user sends a message, their nickname should be printed
  * **i.e.** `cfcrew: sup hackerz`

####  Documentation  
* write a paragraph about your project
* write documentation on how to get the project running
* write documentation on how to connect to the server

#### Testing  
* no testing required for this lab - yay!
