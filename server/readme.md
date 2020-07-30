# Kanban

## End-point: Register User
### Description: Register a new user
Method: POST
>```
>localhost:3000/register
>```
### Body (**request**)

```json
{
	"username":"name",
	"email":"name@mail.com",
    "password":"password",
}
```

### Body (**response**)
**status: 201**

```json
{
  "msg": "name successfully registered! "
}
```


### Body (**response**)
**status: 400**

```json
{
  "msg": "Email is already registered" 
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
## End-point: User Login
### Description: Login and get jsonwebtoken
Method: POST
>```
>localhost:3000/login
>```
### Body (**request**)

```json
{
    "email": "name@mail.com",
    "password": "password"
}
```

### Body (**response**)
**status: 200**

```json
{
      "token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjRlNGViZTQ4N2Q1Y2RmMmIwMjZhM2IyMjlkODZmMGQ0MjU4NDQ5ZmUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMTA5NTgzNDcwNzA2Ni1xdm1lNmFxY3ZmbTU5cDBoODZvajMyNWkyamllcm0zZS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImF1ZCI6IjEwOTU4MzQ3MDcwNjYtcXZtZTZhcWN2Zm01OXAwaDg2b2ozMjVpMmppZXJtM2UuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTY1MTI2MjAzNTM2MzUzOTAyMTMiLCJlbWFpbCI6Im5pY2tvLnZhbGVudGlub29AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJFTjBWQ2JOWDZHTWJNRmk4MC1UNGV3IiwibmFtZSI6Ik5pY2tvIFZhbGVudGlubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQU9oMTRHaWFvUVFUaUVaOGRoQnMzRkRoWVZzZzBBUGpob3NZNkM4SldRWHBPZz1zOTYtYyIsImdpdmVuX25hbWUiOiJOaWNrbyIsImZhbWlseV9uYW1lIjoiVmFsZW50aW5vIiwibG9jYWxlIjoiZW4iLCJpYXQiOjE1OTUwMDA0MjAsImV4cCI6MTU5NTAwNDAyMCwianRpIjoiYjRhZTgyMTkxZWJlOGQ0NzE0MzZiYmI0YzhlMDlmNjZjOGMxZmRiZSJ9.shmBN---0PvaXnfSy9pEZHsqVCUX2Mm-qzSSKSSMFPrfrlds87qWpEFevi1baFNk8iWSy9pPpFM3V0cQdonqjS1mrTQBBHwi1LCYO_tIWgCqNLDooLB2ZxZT4AjTAJiWuC8lFYgLsOQbzaTfBlu9jy8TMeavWXHub3DN9cQ7sn3Sd_VeZtOq-OxUDT1KM0Ja8n7O95kv2qLVUYhgGjsVLncxv_UticPYgBVfRUKT2ugg-_dnzMqdfb_stazhGzM0BjX1F1icPVNb045yH77JzeyC1PNfHxAevABFWktkgItKT-wefNfSgdoMVdESJ0rQAgU_0o0lqruAkv3pzww7Iw"
}
```

### Body (**response**)
**status: 400**

```json
{
  "msg": "Email or password is invalid."
}
```



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃