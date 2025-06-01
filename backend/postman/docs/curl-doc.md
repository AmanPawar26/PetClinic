# 🧪 PetClinic API - cURL Testing Documentation

This document contains cURL commands for testing the backend endpoints of the PetClinic application.

## 📂 Owners

### 🔹 Get All Owners
- **Method:** `GET`
- **Endpoint:** `http://localhost:3000/owners`
```bash
curl http://localhost:3000/owners
```

### 🔹 Get Owner by Last Name
- **Method:** `GET`
- **Endpoint:** `http://localhost:3000/owners/find?last_name=jones`
```bash
curl 'http://localhost:3000/owners/find?last_name=jones'
```

### 🔹 Get Owner by ID
- **Method:** `GET`
- **Endpoint:** `http://localhost:3000/owners/1`
```bash
curl http://localhost:3000/owners/1
```

### 🔹 Create New Owner
- **Method:** `POST`
- **Endpoint:** `http://localhost:3000/owners`
```bash
curl --request POST http://localhost:3000/owners \
  --header 'Content-Type: application/json' \
  --data '{
    "first_name": "Mark",
    "last": "Davis",
    "address": "123 East St",
    "city": "Townsville",
    "telephone": "1234567890"
  }'
```

### 🔹 Update Owner
- **Method:** `PUT`
- **Endpoint:** `http://localhost:3000/owners/22`
```bash
curl --request PUT http://localhost:3000/owners/22 \
  --header 'Content-Type: application/json' \
  --data '{
    "first_name": "William",
    "last_name": "Smith",
    "address": "456 West Street",
    "city": "Springfield",
    "telephone": "98765438990"
  }'
```

## 📂 Pet Types

### 🔹 Get Pet Types
- **Method:** `GET`
- **Endpoint:** `http://localhost:3000/api/pet-types`
```bash
curl http://localhost:3000/api/pet-types
```

### 🔹 Create Pet Type
- **Method:** `POST`
- **Endpoint:** `http://localhost:3000/pet-types`
```bash
curl --request POST http://localhost:3000/pet-types \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "Dog"
  }'
```

## 📂 Pets

### 🔹 Add New Pet Under Owner
- **Method:** `POST`
- **Endpoint:** `http://localhost:3000/owners/2/pets`
```bash
curl --request POST http://localhost:3000/owners/2/pets \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "Bruno",
    "birth_date": "2022-05-01",
    "type_id": 5
  }'
```

### 🔹 Update Pet for Specific Owner
- **Method:** `PUT`
- **Endpoint:** `http://localhost:3000/owners/1/pets/1`
```bash
curl --request PUT http://localhost:3000/owners/1/pets/1 \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "Buddy",
    "birth_date": "2021-06-15",
    "type_id": 2
  }'
```

## 📂 Visits

### 🔹 Add New Visit
- **Method:** `POST`
- **Endpoint:** `http://localhost:3000/owners/6/pets/7/visit`
```bash
curl --request POST http://localhost:3000/owners/6/pets/7/visit \
  --header 'Content-Type: application/json' \
  --data '{
    "visit_date": "2024-05-29",
    "description": "Annual checkup"
  }'
```

## 📂 Veterinarians

### 🔹 Get Veterinarians and Specialities
- **Method:** `GET`
- **Endpoint:** `http://localhost:3000/vets`
```bash
curl http://localhost:3000/vets
```

