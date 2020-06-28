import { Router } from "https://deno.land/x/oak/mod.ts";
import { getAll, insertOne, findOne, updateOne, deleteOne } from "../controllers/todo.ts";

const route = new Router();

route
    .get('/', async ({
        response
    }: {
        response: any;
    }) => {
        response.status = 200;
        response.body = {
            message: "welcome"
        }
    })
    .get('/api/v1/tasks', getAll)
    .post('/api/v1/tasks', insertOne)
    .get('/api/v1/tasks/:id', findOne)
    .put('/api/v1/tasks/:id', updateOne)
    .delete('/api/v1/tasks/:id', deleteOne);

export default route;