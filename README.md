# Backend Task (Rainier Technologies)

- Node.js version: 20.9.0
- To globally install yarn, run `npm install --global yarn`. For Linux/Mac, try adding `sudo` before the command if it doesn't work.
- After cloning the project, change the working directory to `api` and run `yarn` in the terminal to install necessary dependencies.
- To start the backend server, run `nodemon index.js`.

## API Endpoints

- Register new user: `/api/auth/register`
- Login: `/api/auth/login`
- Get a list of all courses: `/api/course/find/all`
- Get a course by ID: `/api/course/find/<id>`
- Create a new course: `/api/course/create`
- Update an existing course: `/api/course/update/<id>`
- Delete an existing course: `/api/course/delete/<id>`

## Sample Request Bodies

### Register

```json
{
    "username": "admin",
    "isAdmin": true,
    "password": "123456"
}
```

### Login

```json
{
    "username": "admin",
    "password": "123456"
}
```

### Create a New Course

```json
{
    "name": "Introduction to Web Development",
    "description": "A Comprehensive Introduction to Web Development.",
    "price": 5000,
    "duration": "8 weeks",
    "level": "Beginner",
    "topics": ["HTML", "CSS", "JavaScript", "Vue.js", "Node.js", "Express.js", "RESTful APIs"],
    "schedule": {
        "startDate": "2023-02-15",
        "endDate": "2023-04-10",
        "classDays": ["Monday", "Wednesday", "Friday"],
        "classTime": "18:00 - 20:00"
    }
}
```

### Update Course

```json
{
    "name": "Introduction to Web Development and APIs",
    "price": 7000
}
```

