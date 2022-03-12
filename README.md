# Devops Project frontend
This is the frontend repo of the project created for DevOps training. The frontend is written in ReactJS. This is a simple frontend that connects to the Todo Backend.
In order to make the application up and running do the following:
- Create a .env file at the root of the project.
- Copy the .env.example file's content in the .env file created in the previous step.
- Run the command `docker-compose up`. It will pull the images from docker hub and start the micro services for frontend, backend, nginx, and mongodb.
- The frontend and backend are served through the nginx.
- This docker-compose file contains the configurations for services nginx, frontend, backend, and mongodb.
- Visit the http://localhost and you should see the default page of the frontend.
- In this page you can create and view the ToDos.