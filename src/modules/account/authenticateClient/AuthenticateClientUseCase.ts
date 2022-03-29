import { prisma } from "../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from 'jsonwebtoken';

interface IAuthenticateCLient {
    username: string;
    password: string;
}


export class AuthenticateClientUseCase {

    async execute({username, password}: IAuthenticateCLient) {

        const client = await prisma.clients.findFirst({
            where: {
                username
            }
        });

        if(!client) {
            throw new Error("Client not found");
        };

        const passwordMatch = await compare(password, client.password);

        if(!passwordMatch) {
            throw new Error("Invalid password");
        };

        const token = sign({username}, "a2edba53a0d7c0b9905341c25a521457", {
            subject: client.id,
            expiresIn: "1d"
        });

        return token;
    }

}