/*
  Warnings:

  - You are about to drop the column `userUsername` on the `contacts` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `contacts` DROP FOREIGN KEY `contacts_username_fkey`;

-- AlterTable
ALTER TABLE `contacts` DROP COLUMN `userUsername`,
    MODIFY `username` VARCHAR(100) NOT NULL;

-- AddForeignKey
ALTER TABLE `contacts` ADD CONSTRAINT `contacts_username_fkey` FOREIGN KEY (`username`) REFERENCES `users`(`username`) ON DELETE RESTRICT ON UPDATE CASCADE;
