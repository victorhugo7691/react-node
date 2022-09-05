const express = require("express");

const allTodos = [{ name: "aaaaa", status: false }];
const todasRoutes = express.Router();

todasRoutes.post("/todos", (request, response) => {
    const { name } = request.body;
    allTodos.push({ name, status: false });
    return response.status(201).json(allTodos);
});

todasRoutes.get("/todos", (request, response) => {
    return response.status(200).json(allTodos);
});

todasRoutes.put("/todos", (request, response) => {
    const { name, status } = request.body;
    const allTodos = allTodos.update({
        where: {
            name,
        },
        data: {
            name,
            status,
        },
    });
});

todasRoutes.delete("/todos/:name", (request, response) => {
    const { name } = request.params;
    if(!name){
        return response.status(400).json("Nome e obrigatorio");
    }
    existeTodos = allTodos({ where: { name }});

    if(!existeTodos){
        return response.status(404).json("Nao existe");
    }

    allTodos.delete({ where: { name }});
    return response.status(200).send;
});

module.exports = todasRoutes;