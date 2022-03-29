-- AddForeignKey
ALTER TABLE `Deliveries` ADD CONSTRAINT `Deliveries_id_deliveryman_fkey` FOREIGN KEY (`id_deliveryman`) REFERENCES `Deliveryman`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Deliveries` ADD CONSTRAINT `Deliveries_id_client_fkey` FOREIGN KEY (`id_client`) REFERENCES `Clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
