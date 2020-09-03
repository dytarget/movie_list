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

Run the commands to create database:

```bash
rails db:create
```

If you get error, that role doesn`t exists you can create it with following command and type role name in appeared line.:

```bash
sudo -u postgres createuser --interactive
```

and continue following commands:

```bash
rails db:migrate
```

```bash
rails db:seed
```

## Usage

To run project

```python
rails s
```

Now go to http://localhost:3000 and wait while webpack compiles and then you can see project.
React part of project in folder /app/javascript/src
