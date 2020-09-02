# Movie list web app

At first fetch the repository and make sure that installed Node js, Yarn, Postgresql, Ruby, Ruby on Rails on your machine.

## Initialization

Run the following commands to start project:

```bash
bundle install
```

```bash
yarn
```

Before you start initialize databse, make sure that you have existing role(your username). If you get error, that role doesn`t exists you can create it with following command:

```bash
sudo -u postgres createuser --interactive
```

type role name in appeared line.

Run the command to create database:

```bash
rails db:create
rails db:migrate
rails db:seed
```

## Usage

To run project

```python
rails s
```

Now go to http://localhost:3000 and wait while webpack compiles and then you can see project.
