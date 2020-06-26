import { Router } from "https://deno.land/x/oak/mod.ts";
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
    });

export default route;