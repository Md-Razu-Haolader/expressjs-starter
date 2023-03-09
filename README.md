# ExxpressJs Starter

ExpressJs API starter template

### Run cli

```bash
yarn install
```

### To run project in development mode

```bash
yarn dev
```

### To build project

```bash
yarn build
```

### To run tests

```bash
yarn test
```

### To check lint errors

```bash
yarn lint
```

### To check lint errors in tests files

```bash
yarn lint:tests
```

### Sample endpoint to create a user: http://localhost:8085/api/v1/users

Method: POST
Payload:

```json
{
  "firstName": "Jhon",
  "lastName": "Doe",
  "email": "jhon@example.com"
}
```

Sample response:

```json
{
  "message": "User created successfully.",
  "data": {
    "id": 1,
    "firstName": "Jhon",
    "lastName": "Doe",
    "email": "jhon@example.com",
    "status": 1,
    "createdAt": "2023-03-09T07:28:54.132Z",
    "updatedAt": "2023-03-09T07:28:54.133Z"
  }
}
```

### Sample endpoint to fetch a user: http://localhost:8085/api/v1/users/1

Sample response:

```json
{
  "message": "User found.",
  "data": {
    "id": 1,
    "firstName": "Jhon",
    "lastName": "Doe",
    "email": "jhon@example.com",
    "status": 1,
    "createdAt": "2023-03-09T07:28:54.132Z",
    "updatedAt": "2023-03-09T07:28:54.133Z"
  }
}
```
