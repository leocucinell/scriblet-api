# Scriblet API
This is the api backend supporting the application [Scriblet]()

## Base URL
> In progress...

## Endpoints

**Students**
| Route | Method | Description | input parameters | Return parameters |
| --------- | --------- | --------- | --------- | --------- |
| /add | POST | add a student to the db | email, hashed password | Success message |
| /:id | GET | retrieves a student by id | id (param) | the student object |


**Subjects**
| Route | Description | input parameters | Return parameters |
| --------- | --------- | --------- | --------- |


**Quizes**
| Route | Description | input parameters | Return parameters |
| --------- | --------- | --------- | --------- |


**Notes**
| Route | Description | input parameters | Return parameters |
| --------- | --------- | --------- | --------- |

## ERD
![scriblet erd](https://i.imgur.com/bLpycHR.png)