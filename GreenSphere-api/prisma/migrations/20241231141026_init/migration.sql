-- CreateTable
CREATE TABLE "Plant" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "isInSale" BOOLEAN NOT NULL,
    "discountPercentage" INTEGER,
    "features" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imgUrl" TEXT
);
