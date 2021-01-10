```
cd backend
npm i
npm run dev
```

you might need to install nodemon

api docs:

```
POST https://fadasdas.herokuapp.com/database/adduser:

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

```
GET https://fadasdas.herokuapp.com/database/finduser

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

```
POST https://fadasdas.herokuapp.com/database/updateUser

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

```
POST https://fadasdas.herokuapp.com/createMatch
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
}

you will get:
redirected
```