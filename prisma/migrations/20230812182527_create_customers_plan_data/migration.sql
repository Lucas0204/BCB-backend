-- CreateEnum
CREATE TYPE "customer_plans" AS ENUM ('PREPAID', 'POSTPAID');

-- CreateTable
CREATE TABLE "customers_plan_data" (
    "id" SERIAL NOT NULL,
    "customer_id" INTEGER NOT NULL,
    "plan" "customer_plans" NOT NULL,
    "balance" INTEGER NOT NULL DEFAULT 0,
    "limit" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "customers_plan_data_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "customers_plan_data_customer_id_key" ON "customers_plan_data"("customer_id");

-- AddForeignKey
ALTER TABLE "customers_plan_data" ADD CONSTRAINT "customers_plan_data_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
