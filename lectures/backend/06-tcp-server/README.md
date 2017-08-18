![cf](https://i.imgur.com/7v5ASc8.png) Lab 06: TCP Chat Server
======

## Learning Objectives  
* students will understand how to implement a TCP server using the `net` module
* students will understand how to work with node.js EventEmitter's

## Requirements


#### OSI Model  
Programmers and engineers have been able to network computers since the early 1970s. As the needs of networked compotuers evolved, there where many soutions developed to conect two ore more computers together, and share information between them. Over time several differnt conceptual modles have also been developed to help describe the differnet networking solutions. In the mid 1980s the _"Open Systems Interconnection Reference Model"_ (OSI model) was developed as a seven layer model. This seven layer OSI model has continued to acuratly describe the different processes in computer networking, and is still widely used as a point of reference while working in networked systems today. 


| Layer | Protocol Data Unit | Function | Examples |   
| ---- | ----- | ----- | ----- |
| Application | Data | Hight Level APIs | HTTP, IMAP, POP, SSH |  
| Presentation | Data | Data translating, including encryption, character encoding, and compression | Strings encoded with null terminated strings vs Strings defined by an Integer Length |  
| Session | Data | Manages a session though passing data back and fourth | NetBios and Remote Procedure Protocol (RPC) |
| **Transport** | Segment / Datagram | Reliable transmision of data between points on a network | TCP and UDP | 
| Network | Packet | Managing the network thourgh addressing, routing, and trafic controll | IP and ICMP 
| Data Link | Frame | Reliable transmision of frames beteen to physical layer nodes | Ethernet and IEEE 802.11 wireless LAN | 
| Physical | bit | transmission and reception of raw data streams over a physical medium | USB, Bluetooth, Ethernet physical layer, SMB, Telephone newtwork modem |


#### TCP 
#### UDP

