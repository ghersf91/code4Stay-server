API routes

| Route                         | HTTP Verb     |Response| Description                     |
| -----------                   | -----------   | ------ |-----------                     |
| `/api/createProject`              |     POST      |'{project}'| Create a new project            |
| `/api/getAllProjects`             |     GET       |'[{project}]'|List of all projects            |
| `/api/getOneProject/:project_id`  |     GET       |'{project}'|Details of a specific project   |   
| `/api/editProject/:project_id`    |     PUT       |'{project}'|Update a specific project       |   
| `/api/deleteProject/:project_id`  |     DELETE    |        |Delete a specific project       |   
| `/api/createUser`                 |     POST      |'{user}'|Create a new user               |
| `/api/getAllUsers`                |     GET       |'[{user}]'|List of all users               | 
| `/api/getOneUser/:user_id`        |     GET       |'{user}'|Details of a specific user      | 
| `/api/editUser/:user_id`          |     PUT       |'{user}'|Edit a new user                 |    
| `/api/deleteUser/:user_id`        |     DELETE    |        |Delete a new user               |    

