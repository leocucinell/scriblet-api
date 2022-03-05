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
| /add | POST | adds a new subject | in progress... | created subject |
| /:id | GET | retrieves a subject by id | id(params) | subject object |
| /:id | PUT | edits a subject | id(params) | subject object |
| /:id | DELETE | deletes a subject | id(params) | success message |


**/quiz**

| Route | Method | Description | input parameters | Return parameters |
| --------- | --------- | --------- | --------- | --------- |
| /add | POST | adds a new quiz | in progress... | created quiz |
| /:id | GET | retrieves a quiz by id | id(params) | quiz object |
| /:id | PUT | edits a quiz | id(params) | quiz object |
| /:id | DELETE | deletes a quiz | id(params) | success message |


**/note**

| Route | Method | Description | input parameters | Return parameters |
| --------- | --------- | --------- | --------- | --------- |
| /add | POST | adds a new note | in progress... | created note |
| /:id | GET | retrieves a note by id | id(params) | note object |
| /:id | PUT | edits a note | id(params) | note object |
| /:id | DELETE | deletes a note | id(params) | success message |


## ERD
![scriblet erd](https://i.imgur.com/KMlmaJD.png)