import { Router } from "https://deno.land/x/oak/mod.ts";
import { getAll, insertOne, findOne, updateOne } from "../controllers/todo.ts";

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
    .put('/api/v1/tasks/:id', updateOne);

export default route;