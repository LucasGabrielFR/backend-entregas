-- DropIndex
DROP INDEX `Deliveries_id_client_fkey` ON `deliveries`;

-- DropIndex
DROP INDEX `Deliveries_id_deliveryman_fkey` ON `deliveries`;

-- AlterTable
ALTER TABLE `deliveries` MODIFY `id_deliveryman` VARCHAR(191) NULL,
    MODIFY `end_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE `Deliveries` ADD CONSTRAINT `Deliveries_id_deliveryman_fkey` FOREIGN KEY (`id_deliveryman`) REFERENCES `Deliveryman`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Deliveries` ADD CONSTRAINT `Deliveries_id_client_fkey` FOREIGN KEY (`id_client`) REFERENCES `Clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
