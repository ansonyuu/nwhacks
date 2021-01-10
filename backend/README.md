```
cd backend
npm i
npm run dev
```

you might need to install nodemon

api docs:

```
POST /database/adduser:

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
GET /database/finduser

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
POST /database/updateuser

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
POST /createMatch
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