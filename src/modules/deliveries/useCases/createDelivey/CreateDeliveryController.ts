import { Request, Response } from "express";
import { CreateDeliveryUseCase } from "./CreateDeliveryUseCase";

export class CreateDeliveryController {

    async handle(req: Request, res: Response) {
        const createDeliveryUseCase = new CreateDeliveryUseCase();

        const { item_name } = req.body;
        const { id_client } = req;

        const delivery = await createDeliveryUseCase.execute({
            id_client,
            item_name,
        });

        return res.json(delivery);
    }

}