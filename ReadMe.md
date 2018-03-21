##NodeJS restful application that stores data to Atlas:MongoDB

###Requirements:
NodeJS
If you wish to use a diffrent db then please update the db.js file with the details you prefer.

###Clone:
git clone https://github.com/marten790/user-and-task-manager.git

### Install Dependencies from route:
npm install

### Run app:
node app.js

### API Calls
Please find API calls below. Postman works to test.

### Create user:
```javascript
http://hostname/api/users
POST {"username":"jsmith","first_name" : "John", "last_name" : "Smith"}
```

### Update user:
```javascript
http://hostname/api/users/{UserId}
PUT {"first_name" : "John", "last_name" : "Doe"}
```

### List all users
```javascript
GET http://hostname/api/users
```

### Get User info
```javascript
GET http://hostname/api/users/{id}
```

### Create Task
```javascript
http://hostname/api/users/{user_id}/tasks
POST {"name":"My task","description" : "Description of task"}
```

### Update Task
```javascript
http://hostname/api/users/{user_id}/tasks/{task_id}
PUT '{"name":"My updated task"}'
```
### Delete Task
```javascript
DELETE http://hostname/api/users/{user_id}/tasks/{task_id}
```
### Get Task Info
```javascript
GET http://hostname/api/users/{user_id}/tasks/{task_id}
```
### List all tasks for a user
```javascript
GET http://hostname/api/users/{user_id}/tasks
```
