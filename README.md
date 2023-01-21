# EventTrackerProject

# Overview
This application is a tracker that has the ability to track workout types, recommend the duration of exercises, provide a description of each exercise, and explain the different muscle groups these exercieses work. For now this application has been built using Rest API services and will eventually get a front end using javaScript and Angular The users will be able to see a list of all available exercieses and informative pictures to be able to properly perform and add to these exercieses.

# Description
Users will be able to find any exercies they want whether it be search by keywork or to find a list of all available exercieses

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
# Rest Endpoints
| Request Method| URI           | Request Body | Response Body                      |
| ------------- |:-------------:| ------------:| ----------------------------------:|
| GET           | /api/workouts |              | Lists all available Workouts       |                  
| GET           | /api/workout/{id}|           | Lists a workout by ID              |
| POST          | /api/workouts | JSON for new Workout| Create a new Workout        |
| PUT           | /api/worouts/{id}| JSON for update Workout| Updates and existing Workout |
| DELETE        | /api/workouts/{id}|          | Deletes an existing workout        |

