import db from "../config/database.ts";

const tasks = db.collection('tasks');

const getAll = async({
    response
}: {
    response: any;
}) => {
    const data = await tasks.find();
    response.status = 200;
    response.body = {
        success: true,
        message: "get all tasks data",
        data: data
    }
}

const insertOne = async({
    response, request
}: {
    response: any;
    request: any;
}) => {
    try {
        const body = await request.body();
        const data = body.value;
        const id = await tasks.insertOne(data);
        data._id = id;

        response.status = 201;
        response.body = {
            success: true,
            message: "task created!",
            data: data
        };
    } catch (err) {
        response.status = 400;
        response.body = {
            success: false,
            message: err,
            data: null
        };
    }
}


export { getAll, insertOne };