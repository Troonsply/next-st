import {json} from "node:stream/consumers";

export async function GET(req) {

    const data = {
        name: 'John Doe',
        age: 30,
        bio:'Some info'
    }
   return new Response(JSON.stringify(data));
}

export async function POST(req) {

    return new Response(req.body);
}

export async function DELETE(req) {

    return new Response(req.body);
}