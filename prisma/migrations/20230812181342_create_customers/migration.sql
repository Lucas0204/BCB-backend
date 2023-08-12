-- CreateTable
CREATE TABLE "customers" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(64) NOT NULL,
    "email" VARCHAR(200) NOT NULL,
    "phone_number" VARCHAR(30) NOT NULL,
    "cpf" CHAR(14) NOT NULL,
    "cnpj" CHAR(18) NOT NULL,
    "company_name" VARCHAR(100) NOT NULL,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "customers_email_key" ON "customers"("email");
