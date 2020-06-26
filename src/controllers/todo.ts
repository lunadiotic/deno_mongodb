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


export { getAll };