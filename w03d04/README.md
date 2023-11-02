# W03D04 - Security & Real World HTTP Servers

### To Do
- [x] Storing passwords
- [x] Encrypted cookies
- [x] HTTP Secure (HTTPS)
- [x] REST
- [x] More HTTP methods
- [x] Method Override [Stretch]

### Hashing
* one way process
* plaintext password => hashing algo (bcrypt) => sdfhaklsdhfkahdidfhifhasdnflahsdf (hash)
* salt => added to the password before hashing

'asdjfgajsdgf' + 'password' => hashing algo => hash

### Encryption
* Two way process
* one key used for both locking and unlocking

set the cookie => middleware (encrypt the cookie) => encrypted value to browser
encrypted cookie => middleware (decrypt the cookie) => plaintext cookie



http://localhost:3000/protected


Man in the Middle
Monster in the Middle (MitM)

HTTPS => HTTP Secure


### Asymetric Encryption
* the key to lock is not the same as the key to unlock
* public and private keys

https://www.google.com/


### REST
* REpresentation State Transfer
* naming convention

GET /all-the-urls
POST /create-a-new-shortened-url

RESTful

Browse  GET   /dinosaurs
Read    GET   /dinosaurs/:id
Edit    POST  /dinosaurs/:id
Add     POST  /dinosaurs
Delete  POST  /dinosaurs/:id/delete

Browse  GET     /dinosaurs
Read    GET     /dinosaurs/:id
Edit    PATCH   /dinosaurs/:id
Add     POST    /dinosaurs
Delete  DELETE  /dinosaurs/:id

### More HTTP Methods
* PATCH => replace a piece of a resource
* PUT => replace the resource completely
* DELETE => delete a resource

app.patch();
app.put();
app.delete();


const x = 42;
const age = 42;

<div>
<section>
<article>
<footer>
<header>



req.method // 'POST'
req.method = 'PATCH'

app.patch()





client <===========tcp/http===============> server
client <===> middleware <===> middleware <===> middleware <===> server
response
            body-parser       cookie-parser    cookie-session
            req.body          req.cookies     encrypt the cookie
              next()          next()


(req, res, next) => {}

