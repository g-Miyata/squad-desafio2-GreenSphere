/*
  Warnings:

  - Added the required column `plantType` to the `Plant` table without a default value. This is not possible if the table is not empty.
  - Made the column `imgUrl` on table `Plant` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Plant" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "plantType" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "isInSale" BOOLEAN NOT NULL,
    "discountPercentage" INTEGER,
    "features" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL
);
INSERT INTO "new_Plant" ("description", "discountPercentage", "features", "id", "imgUrl", "isInSale", "label", "name", "price", "subtitle") SELECT "description", "discountPercentage", "features", "id", "imgUrl", "isInSale", "label", "name", "price", "subtitle" FROM "Plant";
DROP TABLE "Plant";
ALTER TABLE "new_Plant" RENAME TO "Plant";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
