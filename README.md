# Cathay-THP (Take Home Project)

A simple frontend Order status webapp build with React.js, Hooks, Redux Toolkit, CSS, JS.

### `Demo`

![image](https://github.com/Allen0524/CathayTHP/blob/main/cathayDemo.gif)

## Installation

A simple api server using json-server package. You have to install it in global enviroment.

The mock data is located at src/APIserver/db.json and you can manually add any data that matchs the JSON format.

The server PORT is 3020. You can easily change the PORT number and the file is located at src/APIserver/json-server.json. 

You must use two terminals:

### `One`

```
$ git clone https://github.com/Allen0524/CathayTHP.git
$ npm install
$ cd src/APIserver && json-server db.json 
```

### `The other`
```
$ cd thp
$ yarn start
```

## Features

1. Use RTK(Redux-Toolkit) to avoid complex redux boilerplate.
2. Responsive Web Design(RWD)：support Phone, Tablet and Desktop version.




