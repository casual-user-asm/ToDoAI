
![output-onlinepngtools](https://github.com/user-attachments/assets/0cd0e744-bf49-4f54-93e6-170887bdcd5d)

# ToDoAI

Boost productivity with AI-powered task management. Get instant tips and guidance for your tasks, like cooking broccoli or planning your day, right in your to-do list!


## Features

- AI Assistance: Get personalized tips and guidance for various tasks, such as cooking or organizing your schedule.
- Integrated Task List: Manage and track all your tasks in one place, with AI support directly within your task list.
- Smart Suggestions: Receive contextual recommendations and advice based on the tasks you’re working on.
- Seamless Integration: Easily incorporate AI help into your daily routine without needing to switch between apps.


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_OPENAI_KEY`


## Run with Docker

Clone the project

```bash
  git clone https://github.com/casual-user-asm/ToDoAI.git
```

Go to the project directory

```bash
  cd ToDoAI
```

Build the Docker Image:

```bash
  docker build -t ToDoAI .

```

Run the Docker Container

```bash
  docker run -p 3000:3000 ToDoAI

```

## Run Locally

Clone the project

```bash
  git clone https://github.com/casual-user-asm/ToDoAI.git
```

Go to the project directory

```bash
  cd ToDoAI
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```
