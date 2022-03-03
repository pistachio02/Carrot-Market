import withHandler from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";


async function handler(req: NextApiRequest, res: NextApiResponse) {

    const { phone, email } = req.body;
    const user = phone ? { phone: +phone } : { email }
    const payload = Math.floor(100000 + Math.random() * 900000) + "";

    /* const user = await client.user.upsert({
        where: {
            ...payload,
        },
        create: {
            name: "Anonymous",
            ...payload,
        },
        update: {}
    }) */

    const token = await client.token.create({
        data: {
            payload,
            user: {
                connectOrCreate: {
                    where: {
                        ...user,
                    },
                    create: {
                        name: "Anonymous",
                        ...user,
                    },
                },
            },
        }
    })

    console.log(token)

    /* console.log(user) */

    /* if(email) {
        user = await client.user.findUnique({
            where: {
                email,
            }
        })
        if(user) console.log("Founded")
        if(!user) {
            console.log("Did not find. Will create.")
            user = await client.user.create({
                data: {
                    name: "Anonymous",
                    email,
                }
            })
        }
        console.log(user);
    }
    if(phone) {
        user = await client.user.findUnique({
            where: {
                phone: +phone,
            }
        })
        if(user) console.log("Founded")
        if(!user) {
            console.log("Did not find. Will create.")
            user = await client.user.create({
                data: {
                    name: "Anonymous",
                    phone,
                }
            })
        }
        console.log(user);
    }
    */

    // return res.status(200).end();
    return res.status(200).json({ data: token });
};

export default withHandler("POST", handler);
