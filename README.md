# Scriblet API
This is the api backend supporting the application [Scriblet]()

## Base URL
> In progress...

## Endpoints

**/student**

| Route | Method | Description | input parameters | Return parameters |
| --------- | --------- | --------- | --------- | --------- |
| /add | POST | add a student to the db | email, hashed password | Success message |
| /:id | GET | retrieves a student by id | id (param) | the student object |


**/subject**

| Route | Method | Description | input parameters | Return parameters |
| --------- | --------- | --------- | --------- | --------- |


**/quiz**

| Route | Method | Description | input parameters | Return parameters |
| --------- | --------- | --------- | --------- | --------- |


**/note**

| Route | Method | Description | input parameters | Return parameters |
| --------- | --------- | --------- | --------- | --------- |
| /add | POST | adds a new note | in progress... | created note |
| /:id | GET | retrieves a note by id | id(params) | note object |
| /:id | PUT | edits a note | id(params) | note object |
| /:id | DELETE | deletes a note | id(params) | success message |


## ERD
![scriblet erd](https://i.imgur.com/bLpycHR.png)