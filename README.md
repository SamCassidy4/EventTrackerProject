# EventTrackerProject

# Overview
This application is a tracker that has the ability to track workout types, recommend the duration of exercises, provide a description of each exercise, and explain the different muscle groups these exercieses work. For now this application has been built using Rest API services and will eventually get a front end using javaScript and Angular The users will be able to see a list of all available exercieses and informative pictures to be able to properly perform and add to these exercieses.

# Description
Users will be able to find any exercies they want whether it be search by keywork or to find a list of all available exercieses. This application was put in place to demonstrate the ability to dynamically create a webpage using JavaScript and the Document Object Model. The CRUD operations are handled in the RESTful API's.The API's are handled using a Java backend and The database being used is MySQL.

#Technologies used
- Java
- JUnit 5
- MySQL
- MySQL Workbench
- SpringBoot
- Gradle
- Postman
- Gradle
- Rest API
- JavaScript
- JSON
- AJAX
- XHR
- DOM
- TDD
- AWS
- HTML
# Rest Endpoints
| Request Method| URI           | Request Body | Response Body                      |
| ------------- |:-------------:| ------------:| ----------------------------------:|
| GET           | /api/workouts |              | Lists all available Workouts       |                  
| GET           | /api/workout/{id}|           | Lists a workout by ID              |
| POST          | /api/workouts | JSON for new Workout| Create a new Workout        |
| PUT           | /api/workouts/{id}| JSON for update Workout| Updates and existing Workout |
| DELETE        | /api/workouts/{id}|          | Deletes an existing workout        |

# Schema

![Screenshot 2023-01-29 at 4 04 10 PM](https://user-images.githubusercontent.com/103699625/215360917-340137cb-50b9-414d-8380-94c6a073eeea.png)


