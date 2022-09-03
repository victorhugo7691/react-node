const express = require("express");

const allTodos = [];
const todasRoutes = express.Router();

todasRoutes.post("/todos", (request, response) => {
    const {name} = request.body;
    allTodos.push({name, status: false});
    return response.status(201).json(allTodos);
});

module.exports = todasRoutes;