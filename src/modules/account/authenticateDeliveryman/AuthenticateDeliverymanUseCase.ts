import { prisma } from "../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from 'jsonwebtoken';

interface IAuthenticateDeliveryman {
    username: string;
    password: string;
}

export class AuthenticateDeliverymanUseCase {

    async execute({username, password}: IAuthenticateDeliveryman) {

        const deliveryman = await prisma.deliveryman.findFirst({
            where: {
                username
            }
        });

        if(!deliveryman) {
            throw new Error("Deliveryman not found");
        };

        const passwordMatch = await compare(password, deliveryman.password);

        if(!passwordMatch) {
            throw new Error("Invalid password");
        };

        const token = sign({username}, "a2edba53a0d7c0b9905441c25a521457", {
            subject: deliveryman.id,
            expiresIn: "1d"
        });

        return token;
    }

}