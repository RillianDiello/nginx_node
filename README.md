In this challenge, you will put into practice what we've learned about using Nginx as a reverse proxy. The main idea is that when a user accesses Nginx, it will make a request to our Node.js application. This application, in turn, will insert a record into our MySQL database, registering a name in the people table.

The response from the Node.js application to Nginx should be:

<h1>Full Cycle Rocks!</h1>

- List of names registered in the database.

Generate the docker-compose in such a way that we only need to run docker-compose up -d and everything should be working and available on port 8080.

- Don't forget to add a volume to the application for the development environment.

- Push everything to a repository and submit your solution.

- The programming language for this challenge is Node/JavaScript.
