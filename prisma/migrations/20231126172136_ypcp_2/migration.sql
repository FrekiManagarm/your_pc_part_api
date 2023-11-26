-- CreateTable
CREATE TABLE "SSD" (
    "id" SERIAL NOT NULL,
    "capacity" INTEGER NOT NULL DEFAULT 0,
    "price_per_gb" INTEGER NOT NULL DEFAULT 0,
    "type" TEXT,
    "cache" INTEGER DEFAULT 0,
    "form_factor" TEXT,
    "interface" TEXT,

    CONSTRAINT "SSD_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SSDOfSetup" (
    "ssd_id" INTEGER NOT NULL,
    "setup_id" INTEGER NOT NULL,

    CONSTRAINT "SSDOfSetup_pkey" PRIMARY KEY ("ssd_id","setup_id")
);

-- AddForeignKey
ALTER TABLE "SSDOfSetup" ADD CONSTRAINT "SSDOfSetup_ssd_id_fkey" FOREIGN KEY ("ssd_id") REFERENCES "SSD"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SSDOfSetup" ADD CONSTRAINT "SSDOfSetup_setup_id_fkey" FOREIGN KEY ("setup_id") REFERENCES "Setup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
