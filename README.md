Good day Sir/Ma. I tried to send the mail my inserting the following information on Postman app but posting error on server.

Information inputed on postman:
{
    "name":"Abdulyekeen Lukman",
    "email": "oyeniyifortunate@gmail.com",
    "subject":"Contact us response",
    "message":"Email message from Node exercice"
}

server response: Error: connect ECONNREFUSED 127.0.0.1:587
    at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1157:16) {
  errno: -4078,
  code: 'ESOCKET',
  syscall: 'connect',
  address: '127.0.0.1',
  port: 587,
  command: 'CONN'
}
Error: connect ECONNREFUSED 127.0.0.1:587
    at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1157:16) {
  errno: -4078,
  code: 'ESOCKET',
  syscall: 'connect',
  address: '127.0.0.1',
  port: 587,
  command: 'CONN'
}


******************************************************
I tried on procure solution, but later found out that developers dont have specific answer to it.
