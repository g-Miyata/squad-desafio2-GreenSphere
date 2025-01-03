/*
  Warnings:

  - You are about to drop the column `plantType` on the `Plant` table. All the data in the column will be lost.
  - You are about to drop the column `plantId` on the `Type` table. All the data in the column will be lost.
  - Made the column `typeId` on table `Plant` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Plant" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "isInSale" BOOLEAN NOT NULL,
    "discountPercentage" REAL NOT NULL,
    "features" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "typeId" INTEGER NOT NULL,
    CONSTRAINT "Plant_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Plant" ("description", "discountPercentage", "features", "id", "imgUrl", "isInSale", "label", "name", "price", "subtitle", "typeId") SELECT "description", "discountPercentage", "features", "id", "imgUrl", "isInSale", "label", "name", "price", "subtitle", "typeId" FROM "Plant";
DROP TABLE "Plant";
ALTER TABLE "new_Plant" RENAME TO "Plant";
CREATE TABLE "new_Type" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "typeName" TEXT NOT NULL
);
INSERT INTO "new_Type" ("id", "typeName") SELECT "id", "typeName" FROM "Type";
DROP TABLE "Type";
ALTER TABLE "new_Type" RENAME TO "Type";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
