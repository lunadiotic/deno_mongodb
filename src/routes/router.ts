import { Router } from "https://deno.land/x/oak/mod.ts";
import { getAll, insertOne } from "../controllers/todo.ts";

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
    .post('/api/v1/tasks', insertOne);

export default route;