const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/', async(req, res) => {
    try{
        const response = await axios.get('https://reqres.in/api/users?page=2');
        const users = response.data.data; 

        let userList ='<ul>';
        users.forEach(user => {
            userList +=`<li>${user.first_name} ${user.last_name} -${user.email}</li>`;
        });
        userList +='<ul>'; 

        res.send(userList);
    }catch (error) {
        console.error(error);
        res.status(500).send('Error fetching users');
    }
});