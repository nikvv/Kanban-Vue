# Kanban


## POST /register
register user

### Data
- username (String)
    
- email (String)
    
- password (String)
    



#### Request Body
```javascript
{
	"username":"name",
	"email":"name@mail.com",
    "password":"password",
}
```

#### Response
Status 201
msg: `${username} successfully registered!`

Status 400

msg: 'Email is already registered' 


## POST /login
Login User

### Properties
- email (String)
- password (String)



####  Body
```javascript
{
	"email":"name@mail.com",
	"password":"password"
}
```

#### Response
Status 200
```javascript
{
  "token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjRlNGViZTQ4N2Q1Y2RmMmIwMjZhM2IyMjlkODZmMGQ0MjU4NDQ5ZmUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMTA5NTgzNDcwNzA2Ni1xdm1lNmFxY3ZmbTU5cDBoODZvajMyNWkyamllcm0zZS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImF1ZCI6IjEwOTU4MzQ3MDcwNjYtcXZtZTZhcWN2Zm01OXAwaDg2b2ozMjVpMmppZXJtM2UuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTY1MTI2MjAzNTM2MzUzOTAyMTMiLCJlbWFpbCI6Im5pY2tvLnZhbGVudGlub29AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJFTjBWQ2JOWDZHTWJNRmk4MC1UNGV3IiwibmFtZSI6Ik5pY2tvIFZhbGVudGlubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQU9oMTRHaWFvUVFUaUVaOGRoQnMzRkRoWVZzZzBBUGpob3NZNkM4SldRWHBPZz1zOTYtYyIsImdpdmVuX25hbWUiOiJOaWNrbyIsImZhbWlseV9uYW1lIjoiVmFsZW50aW5vIiwibG9jYWxlIjoiZW4iLCJpYXQiOjE1OTUwMDA0MjAsImV4cCI6MTU5NTAwNDAyMCwianRpIjoiYjRhZTgyMTkxZWJlOGQ0NzE0MzZiYmI0YzhlMDlmNjZjOGMxZmRiZSJ9.shmBN---0PvaXnfSy9pEZHsqVCUX2Mm-qzSSKSSMFPrfrlds87qWpEFevi1baFNk8iWSy9pPpFM3V0cQdonqjS1mrTQBBHwi1LCYO_tIWgCqNLDooLB2ZxZT4AjTAJiWuC8lFYgLsOQbzaTfBlu9jy8TMeavWXHub3DN9cQ7sn3Sd_VeZtOq-OxUDT1KM0Ja8n7O95kv2qLVUYhgGjsVLncxv_UticPYgBVfRUKT2ugg-_dnzMqdfb_stazhGzM0BjX1F1icPVNb045yH77JzeyC1PNfHxAevABFWktkgItKT-wefNfSgdoMVdESJ0rQAgU_0o0lqruAkv3pzww7Iw"
}
```

Status 400
```
msg: 'Email or password is invalid.'
```