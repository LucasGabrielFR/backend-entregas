-- DropIndex
DROP INDEX `Deliveries_id_client_fkey` ON `deliveries`;

-- DropIndex
DROP INDEX `Deliveries_id_deliveryman_fkey` ON `deliveries`;

-- AlterTable
ALTER TABLE `deliveries` ALTER COLUMN `end_at` DROP DEFAULT;

-- AddForeignKey
ALTER TABLE `Deliveries` ADD CONSTRAINT `Deliveries_id_deliveryman_fkey` FOREIGN KEY (`id_deliveryman`) REFERENCES `Deliveryman`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Deliveries` ADD CONSTRAINT `Deliveries_id_client_fkey` FOREIGN KEY (`id_client`) REFERENCES `Clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
