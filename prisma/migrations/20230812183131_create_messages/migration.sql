-- CreateTable
CREATE TABLE "messages" (
    "id" SERIAL NOT NULL,
    "from_customer_id" INTEGER NOT NULL,
    "to_phone_number" VARCHAR(30) NOT NULL,
    "is_whatsapp" BOOLEAN NOT NULL DEFAULT false,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "messages_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_from_customer_id_fkey" FOREIGN KEY ("from_customer_id") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
