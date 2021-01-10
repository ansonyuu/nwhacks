```
cd backend
npm i
npm run dev
```

api docs:


POST https://fadasdas.herokuapp.com/database/adduser:

send a request to this endpoint. adds a new user to the mongodb. 

it requires name, role, languages, interests
```
send:
{
    "languages": [
        "yeet"
    ],
    "interests": [
        "sd1",
        "2ds"
    ],
    "name": "yeet",
    "role": "yeet",
    "careHome": "carehome"
}

you will get:
nothing
```

GET https://fadasdas.herokuapp.com/database/finduser

retrieve a user. all you need is their name
```
send:
{
    "name": "yeet",
}

you will get:
{
    "languages": [
        "yeet"
    ],
    "interests": [
        "sd1",
        "2ds"
    ],
    "name": "yeet",
    "role": "yeet",
    "careHome": "carehome"
}
```

POST https://fadasdas.herokuapp.com/database/updateUser

this will update a user already existing. if the user does not exist it will not update 

requires: name
```
send:
{
    "languages": [
        "yeet"
    ],
    "interests": [
        "sd1",
        "2ds"
    ],
    "name": "yeet",
    "role": "yeet",
    "careHome": "carehome"
}

you will get:
nothing
```

POST https://fadasdas.herokuapp.com/createMatch

if senior, will return the senior's video uuid. if youth, will be matched with a senior's video uuid.

requires: name
```
send:
{
    "name": "yeet"
}

you will get:
redirected
```