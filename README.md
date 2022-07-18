API routes

| Route                         | HTTP Verb     |Response| Description                     |
| -----------                   | -----------   | ------ |-----------                     |
| `/api/projects/createProject`              |     POST      |'{project}'| Create a new project            |
| `/api/projects/getAllProjects`             |     GET       |'[{project}]'|List of all projects            |
| `/api/projects/getOneProject/:project_id`  |     GET       |'{project}'|Details of a specific project   |   
| `/api/projects/editProject/:project_id`    |     PUT       |'{project}'|Update a specific project       |   
| `/api/projects/deleteProject/:project_id`  |     DELETE    |        |Delete a specific project       |   
| `/api/users/createUser`                 |     POST      |'{user}'|Create a new user               |
| `/api/users/getAllUsers`                |     GET       |'[{user}]'|List of all users               | 
| `/api/users/getOneUser/:user_id`        |     GET       |'{user}'|Details of a specific user      | 
| `/api/users/editUser/:user_id`          |     PUT       |'{user}'|Edit a new user                 |    
| `/api/users/deleteUser/:user_id`        |     DELETE    |        |Delete a new user               |    

