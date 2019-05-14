# Facilitators Guide: TCP Server

## Preparation
Today is all about the OSI model and working within a TCP layer.  You'll want to be comfortable with both the native NodeJS `net` module as well as node events in order to create a TCP chat server for the daily lecture demo.  You can find several implemetations of this demo in the */demos* directory.
 
 We recommend that you code out the basic chatroom in class and then if you shred through it and have time, refactor it into the modular version. Likely, you won't have that kind of time. A live refactoring from the one-file chat into the modular version makes for an awesome code-review on the next day, so you may want to simply queue that up instead of a student code review session.

## Lecture Main Topics & Overall Flow

### Live Demo `chatroom`
`chatroom` is a simple one-file TCP chat server that you should be easily able to build in class. It creates a simple Socket Pool using a user model, a command parser, and events to deal with commands. It's pretty easy to build this in one segment and talk through all of the concepts.
 
### Live Demo `chatroom-modular`
`chatroom-modular` - is a refactoring of the one-file chat room. It's essentially the same code, but we break out the model to a separate file/folder and all of the user actions are also in separate folders. Everything ties into common events and socketpool modules.

## Lab Prep
This is a pretty big refactor. The lab starter code uses a strategy pattern to map the commands/payload to a runnable function.  The students need to convert that to events AND factor it out into modules.

They may not see the patterns immediately, and will likely land on a monolith in their first iteration. Help them see what they can move out and how that makes adding actions easier in the future and more testable right now.


## What bugs, issues, or surprises have come up in the past for this class?
Students will struggle with getting their applications to run, along with remembering the commands to start, connect, and use their application.  Be sure to discuss the use of `telnet` to connect to their application, including random helper commands - like how to disconnect on the client side.  Students on Windows may have issues with carriage/line returns in their command strings so it's a good idea to bring this up early on, to avoid any confusion during lab.

## General Comments and Notes
Students have been working with basic NodeJS event programmig concepts, async programming, binary data, and file system I/O during the past week.  This week is all about how the internet works, starting with the build of a TCP application, then moving into HTTP based applications for the remainder of the course.  You'll want to discuss how HTTP is built on top of TCP and what processes take place to get data from one communication channel to the other.
