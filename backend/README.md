```
cd backend
npm i
npm run dev
```

you might need to install nodemon

api docs:

```
/database/adduser:

send:
{
    "_id": "5ffa77c186ee6145e02d1797",
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
    "_id": "5ffa77c186ee6145e02d1797",
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
    "_id": "5ffa77c186ee6145e02d1797",
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