/*
  Warnings:

  - You are about to drop the column `locationsId` on the `Interactions` table. All the data in the column will be lost.
  - You are about to drop the column `monstersId` on the `Interactions` table. All the data in the column will be lost.
  - You are about to drop the column `nPCsId` on the `Interactions` table. All the data in the column will be lost.
  - You are about to drop the column `playersId` on the `Interactions` table. All the data in the column will be lost.
  - Added the required column `name` to the `Campaign` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Locations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Section` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Campaign] ADD [description] NVARCHAR(1000),
[information] NVARCHAR(1000),
[name] NVARCHAR(1000) NOT NULL;

-- AlterTable
ALTER TABLE [dbo].[Interactions] DROP COLUMN [locationsId],
[monstersId],
[nPCsId],
[playersId];

-- AlterTable
ALTER TABLE [dbo].[Locations] ALTER COLUMN [description] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[Locations] ADD [name] NVARCHAR(1000) NOT NULL;

-- AlterTable
ALTER TABLE [dbo].[NPCs] ADD [description] NVARCHAR(1000),
[information] NVARCHAR(1000);

-- AlterTable
ALTER TABLE [dbo].[Section] ADD [description] NVARCHAR(1000),
[information] NVARCHAR(1000),
[name] NVARCHAR(1000) NOT NULL;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
