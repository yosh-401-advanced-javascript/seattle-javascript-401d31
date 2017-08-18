![cf](https://i.imgur.com/7v5ASc8.png) Lab 06: TCP Chat Server
======

## Learning Objectives  
* students will understand how to implement a TCP server using the `net` module
* students will understand how to work with node.js EventEmitter's

## Requirements


#### OSI Model  
Programmers and engineers have been able to network computers since the early 1970s. As the needs of networked compotuers evolved, there where many soutions developed to conect two ore more computers together, and share information between them. Over time several differnt conceptual modles have also been developed to help describe the differnet networking solutions. In the mid 1980s the _"Open Systems Interconnection Reference Model"_ (OSI model) was developed as a seven layer model. This seven layer OSI model has continued to acuratly describe the different processes in computer networking, and is still widely used as a point of reference while working in networked systems today. A programer or engineer is usualy responsible for the goals of a specific layer and communicating with the layer above and below. Not every computer network solution uses all seven layers, for example HTTP skips the Presentation an Session layers and lives directly on top of the Transport layer.


| # | Layer | Protocol Data Unit | Function | Examples |   
| --- | ---- | ----- | ----- | ----- |
| 7 | Application | Data | Hight Level APIs | HTTP, IMAP, POP, SSH |  
| 6 | Presentation | Data | Data translating, including encryption, character encoding, and compression | Strings encoded with null terminated strings vs Strings defined by an Integer Length |  
| 5 | Session | Data | Manages a session though passing data back and fourth | NetBios and Remote Procedure Protocol (RPC) |
| 4 | **Transport** | Segment / Datagram | Reliable transmision of data between points on a network | TCP and UDP | 
| 3 | Network | Packet | Managing the network thourgh addressing, routing, and trafic controll | IP and ICMP 
| 2 | Data Link | Frame | Reliable transmision of frames beteen to physical layer nodes | Ethernet and IEEE 802.11 wireless LAN | 
| 1 | Physical | bit | transmission and reception of raw data streams over a physical medium | USB, Bluetooth, Ethernet physical layer, SMB, Telephone newtwork modem |

## Internet Protocol Suite
The Internet Protocol Suite is the conceputal model for the protocols used by the internet. It is often refert to as **TCP/IP** because the IP and TCP were the original protocols in the suite. On the Internt Network communications are decribed in four layers. 

| Layer | Functin | Examples | 
| ---- | ---- | ---- |
| Application | Provides high level data exchange for use in user application development |  HTTP, SMTP, FTP, DHCP |
| Transport | Provides process to process data exchange | TCP, UDP, µTP| 
| Internet | Maintains computer addressing and identification and manages packet routing | IPv4, IPv6, ICMP | 
| Link layer | Used to move packets between two different hosts | MAC, ARP, DSL, Ethernet | 

#### TCP 
The Transmission Control Protocal (TCP) is widley used in by application layers in the Internet Protocol Suite.

