BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[User] (
    [id] NVARCHAR(1000) NOT NULL,
    [username] NVARCHAR(1000) NOT NULL,
    [password] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [User_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [User_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Campaign] (
    [id] NVARCHAR(1000) NOT NULL,
    [relativeId] INT NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Campaign_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    [userId] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Campaign_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Section] (
    [id] NVARCHAR(1000) NOT NULL,
    [relativeId] INT NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Section_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    [campaignId] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Section_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Players] (
    [campaignId] NVARCHAR(1000) NOT NULL,
    [id] NVARCHAR(1000) NOT NULL,
    [relativeId] INT NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Players_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Players_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Monsters] (
    [campaignId] NVARCHAR(1000) NOT NULL,
    [sectionId] NVARCHAR(1000) NOT NULL,
    [id] NVARCHAR(1000) NOT NULL,
    [relativeId] INT NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Monsters_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Monsters_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[NPCs] (
    [campaignId] NVARCHAR(1000) NOT NULL,
    [sectionId] NVARCHAR(1000) NOT NULL,
    [id] NVARCHAR(1000) NOT NULL,
    [relativeId] INT NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [NPCs_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [NPCs_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Locations] (
    [campaignId] NVARCHAR(1000) NOT NULL,
    [sectionId] NVARCHAR(1000) NOT NULL,
    [id] NVARCHAR(1000) NOT NULL,
    [relativeId] INT NOT NULL,
    [type] NVARCHAR(1000) NOT NULL,
    [description] NVARCHAR(1000) NOT NULL,
    [information] NVARCHAR(1000),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Locations_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Locations_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Interactions] (
    [campaignId] NVARCHAR(1000) NOT NULL,
    [sectionId] NVARCHAR(1000) NOT NULL,
    [id] NVARCHAR(1000) NOT NULL,
    [relativeId] INT NOT NULL,
    [type] NVARCHAR(1000) NOT NULL,
    [description] NVARCHAR(1000) NOT NULL,
    [information] NVARCHAR(1000),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Interactions_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    [playersId] NVARCHAR(1000) NOT NULL,
    [monstersId] NVARCHAR(1000) NOT NULL,
    [nPCsId] NVARCHAR(1000) NOT NULL,
    [locationsId] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Interactions_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[_InteractionsToPlayers] (
    [A] NVARCHAR(1000) NOT NULL,
    [B] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [_InteractionsToPlayers_AB_unique] UNIQUE NONCLUSTERED ([A],[B])
);

-- CreateTable
CREATE TABLE [dbo].[_InteractionsToMonsters] (
    [A] NVARCHAR(1000) NOT NULL,
    [B] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [_InteractionsToMonsters_AB_unique] UNIQUE NONCLUSTERED ([A],[B])
);

-- CreateTable
CREATE TABLE [dbo].[_InteractionsToNPCs] (
    [A] NVARCHAR(1000) NOT NULL,
    [B] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [_InteractionsToNPCs_AB_unique] UNIQUE NONCLUSTERED ([A],[B])
);

-- CreateTable
CREATE TABLE [dbo].[_InteractionsToLocations] (
    [A] NVARCHAR(1000) NOT NULL,
    [B] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [_InteractionsToLocations_AB_unique] UNIQUE NONCLUSTERED ([A],[B])
);

-- CreateIndex
CREATE NONCLUSTERED INDEX [_InteractionsToPlayers_B_index] ON [dbo].[_InteractionsToPlayers]([B]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [_InteractionsToMonsters_B_index] ON [dbo].[_InteractionsToMonsters]([B]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [_InteractionsToNPCs_B_index] ON [dbo].[_InteractionsToNPCs]([B]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [_InteractionsToLocations_B_index] ON [dbo].[_InteractionsToLocations]([B]);

-- AddForeignKey
ALTER TABLE [dbo].[Campaign] ADD CONSTRAINT [Campaign_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[User]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Section] ADD CONSTRAINT [Section_campaignId_fkey] FOREIGN KEY ([campaignId]) REFERENCES [dbo].[Campaign]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Players] ADD CONSTRAINT [Players_campaignId_fkey] FOREIGN KEY ([campaignId]) REFERENCES [dbo].[Campaign]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Monsters] ADD CONSTRAINT [Monsters_campaignId_fkey] FOREIGN KEY ([campaignId]) REFERENCES [dbo].[Campaign]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Monsters] ADD CONSTRAINT [Monsters_sectionId_fkey] FOREIGN KEY ([sectionId]) REFERENCES [dbo].[Section]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[NPCs] ADD CONSTRAINT [NPCs_campaignId_fkey] FOREIGN KEY ([campaignId]) REFERENCES [dbo].[Campaign]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[NPCs] ADD CONSTRAINT [NPCs_sectionId_fkey] FOREIGN KEY ([sectionId]) REFERENCES [dbo].[Section]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Locations] ADD CONSTRAINT [Locations_campaignId_fkey] FOREIGN KEY ([campaignId]) REFERENCES [dbo].[Campaign]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Locations] ADD CONSTRAINT [Locations_sectionId_fkey] FOREIGN KEY ([sectionId]) REFERENCES [dbo].[Section]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Interactions] ADD CONSTRAINT [Interactions_campaignId_fkey] FOREIGN KEY ([campaignId]) REFERENCES [dbo].[Campaign]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Interactions] ADD CONSTRAINT [Interactions_sectionId_fkey] FOREIGN KEY ([sectionId]) REFERENCES [dbo].[Section]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[_InteractionsToPlayers] ADD CONSTRAINT [_InteractionsToPlayers_A_fkey] FOREIGN KEY ([A]) REFERENCES [dbo].[Interactions]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[_InteractionsToPlayers] ADD CONSTRAINT [_InteractionsToPlayers_B_fkey] FOREIGN KEY ([B]) REFERENCES [dbo].[Players]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[_InteractionsToMonsters] ADD CONSTRAINT [_InteractionsToMonsters_A_fkey] FOREIGN KEY ([A]) REFERENCES [dbo].[Interactions]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[_InteractionsToMonsters] ADD CONSTRAINT [_InteractionsToMonsters_B_fkey] FOREIGN KEY ([B]) REFERENCES [dbo].[Monsters]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[_InteractionsToNPCs] ADD CONSTRAINT [_InteractionsToNPCs_A_fkey] FOREIGN KEY ([A]) REFERENCES [dbo].[Interactions]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[_InteractionsToNPCs] ADD CONSTRAINT [_InteractionsToNPCs_B_fkey] FOREIGN KEY ([B]) REFERENCES [dbo].[NPCs]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[_InteractionsToLocations] ADD CONSTRAINT [_InteractionsToLocations_A_fkey] FOREIGN KEY ([A]) REFERENCES [dbo].[Interactions]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[_InteractionsToLocations] ADD CONSTRAINT [_InteractionsToLocations_B_fkey] FOREIGN KEY ([B]) REFERENCES [dbo].[Locations]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
