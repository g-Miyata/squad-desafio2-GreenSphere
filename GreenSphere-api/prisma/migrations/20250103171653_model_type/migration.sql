/*
  Warnings:

  - You are about to alter the column `discountPercentage` on the `Plant` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - Made the column `discountPercentage` on table `Plant` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateTable
CREATE TABLE "Type" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "typeName" TEXT NOT NULL,
    "plantId" INTEGER
);

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
    "discountPercentage" REAL NOT NULL,
    "features" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "typeId" INTEGER,
    CONSTRAINT "Plant_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Plant" ("description", "discountPercentage", "features", "id", "imgUrl", "isInSale", "label", "name", "plantType", "price", "subtitle") SELECT "description", "discountPercentage", "features", "id", "imgUrl", "isInSale", "label", "name", "plantType", "price", "subtitle" FROM "Plant";
DROP TABLE "Plant";
ALTER TABLE "new_Plant" RENAME TO "Plant";
CREATE UNIQUE INDEX "Plant_typeId_key" ON "Plant"("typeId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Type_plantId_key" ON "Type"("plantId");
