# FATEK API RESPONSE

## Endpoint: `/api/v1`

## Method: `GET`

Returns data based on the request parameters.

## Dosen

**Get All Dosen**
- **Request**
GET /api/v1/dosen

**Successful Response:**

```json
{
  "status": 200,
  "message": "ok",
  "data": [
    {
        "id": 1,
        "nama": "Adibah Yahya, S.E.,M.M.,Ak",
        "nidn": "0414068102",
        "prodi": "AKUNTANSI"
    },
    {
      "id": 2,
      "nama": "Agus Fuadi, S.E.,M.Ak.",
      "nidn": "0413127302",
      "prodi": "AKUNTANSI"
    },
  ],
  "total": 2
}
```

> ### Tips
> 
> *you can search or filter dosen*
>  
> - ###### GET /api/v1/dosen?search=jhon
> 
> this parameter will search dosen by nama or nidn or prodi.
>
> - ###### GET /api/v1/dosen?filter=akuntansi,hukum
> 
> this parameter will filter dosen by prodi, you can add more than one.
> 

**Get Dosen By Id**
- **Request**
GET /api/v1/dosen/:id

**Successful Response:**

```json
{
  "status": 200,
  "message": "ok",
  "data": {
    "id": 51,
    "nama": "Dr. Sarwo Edy, S.Ag., M.M.",
    "nidn": "02125097001",
    "prodi": "EKONOMI SYARIAH"
  },
}
```

**Generate Token**
- **Request**
GET /api/v1/auth/generate-token

**Successful Response:**

```json
{
  "status": 200,
  "message": "successfully generated",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InB1YmxpY1VzZXIiLCJpYXQiOjE3MTk5MTUzNjAsImV4cCI6MTcxOTkxODk2MH0.X_dj1Lwa7DLVMknP0CgblfzFIiMUFH_XXOQiSFv9gV4"
}
```
> ### Important
> 
> *token valid is 1 hour*
> *you can't access all dosen route without bearer token*

**Unauthorized**
- **Request**
GET /api/v1/dosen

**Successful Response:**

```json
{
    "message": "Unauthorized",
    "statusCode": 401
}
```