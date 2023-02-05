# EventTrackerProject

# Overview
This application is a tracker that has the ability to track workout types, recommend the duration of exercises, provide a description of each exercise, and explain the different muscle groups these exercieses work. For now this application has been built using Rest API services and will eventually get a front end using javaScript and Angular The users will be able to see a list of all available exercieses and informative pictures to be able to properly perform and add to these exercieses. This application was created for novices and experts alike, it fills the void of having a workout tracker without all the clutter on the screen. This allows people to track their workouts day-to-day without feeling the pressure of bringing a notebook to the gym or being distracted by all the reccomendations other applications make.

# Description
Users will be able to find any exercies they want whether it be search by keywork or to find a list of all available exercieses. This application was put in place to demonstrate the ability to dynamically create a webpage using JavaScript and the Document Object Model. The CRUD operations are handled in the RESTful API's.The API's are handled using a Java backend and The database being used is MySQL. Once the DOM manipulation was complete, an Angular front end was implemented to streamline the process and reduce the amount of code needed in order for full CRUD to be possible. 

#Technologies used
- Java
- JUnit 5
- MySQL
- MySQL Workbench
- SpringBoot
- Gradle
- Postman
- Rest API
- JavaScript
- JSON
- AJAX
- XHR
- DOM
- TDD
- AWS
- HTML
- Angular
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

# Future Implementations
For the future of this project it would be great to add a legitimate front-end as well as the addition of a user in the database schema. This would in turn allow user's to login and keep track of their own workouts and monitor their progress in the gym or at home. An addition of a navBar would be desirable in order to quickly maneuver the website. Furthermore, it would be nice to add a time clock that will keep track of when the last time a person worked out and graphs that would allow the user to view their progress on each exercise they consistenly add. This would allow the user to see how much progress they would have made overtime.





