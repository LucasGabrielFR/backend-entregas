import { Router } from "express";
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryman } from "./middlewares/ensureAuthenticateDeliveryman";
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { FindAllDeliveriesController } from "./modules/clients/useCases/deliveries/FindAllDeliveriesController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivey/CreateDeliveryController";
import { FindAllAvailableController } from "./modules/deliveries/useCases/findAllAvailable/FindAllAvailableController";
import { UpdateDeliverymanController } from "./modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController";
import { UpdateEndDateController } from "./modules/deliveries/useCases/updateEndDate/UpdateEndDateController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import { FindAllDeliveriesDeliverymanController } from "./modules/deliveryman/useCases/findAllDeliveries/FindAllDeliveriesDeliverymanController";

const routes = Router();

//Client
const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const findAllDeliveriesController = new FindAllDeliveriesController();

//Deliveryman
const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const updateDelivermanController = new UpdateDeliverymanController();
const findAllDeliveriesDeliverymanController = new FindAllDeliveriesDeliverymanController();

//Deliveries
const deliveryController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController();
const updateEndDateController = new UpdateEndDateController();

routes.post("/client/", createClientController.handle);

routes.post("/deliveryman/", createDeliverymanController.handle);

routes.post("/client/authenticate/", authenticateClientController.handle);

routes.post("/deliveryman/authenticate/", authenticateDeliverymanController.handle);

routes.post("/delivery/" , ensureAuthenticateClient, deliveryController.handle);

routes.get("/delivery/available/", ensureAuthenticateDeliveryman ,findAllAvailableController.handle);

routes.put("/delivery/updateDeliveryman/:id", ensureAuthenticateDeliveryman ,updateDelivermanController.handle);

routes.get("/client/deliveries/", ensureAuthenticateClient, findAllDeliveriesController.handle);

routes.get("/deliveryman/deliveries/", ensureAuthenticateDeliveryman, findAllDeliveriesDeliverymanController.handle);

routes.put("/delivery/updateEndDate/:id", ensureAuthenticateDeliveryman, updateEndDateController.handle);

export { routes };