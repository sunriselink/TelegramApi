// Create container
var builder = new ContainerModule();

// Register App modules
builder.register('AppChatsManager', AppChatsManagerModule.dependencies, AppChatsManagerModule);
builder.register('AppPeersManager', AppPeersManagerModule.dependencies, AppPeersManagerModule);
builder.register('AppProfileManager', AppProfileManagerModule.dependencies, AppProfileManagerModule);
builder.register('AppUsersManager', AppUsersManagerModule.dependencies, AppUsersManagerModule);

// Register Mtp modules
builder.register('MtpApiFileManager', MtpApiFileManagerModule.dependencies, MtpApiFileManagerModule);
builder.register('MtpApiManager', MtpApiManagerModule.dependencies, MtpApiManagerModule);
builder.register('MtpAuthorizer', MtpAuthorizerModule.dependencies, MtpAuthorizerModule);
builder.register('MtpDcConfigurator', MtpDcConfiguratorModule.dependencies, MtpDcConfiguratorModule);
builder.register('MtpNetworkerFactory', MtpNetworkerFactoryModule.dependencies, MtpNetworkerFactoryModule);
builder.register('MtpRsaKeysManager', MtpRsaKeysManagerModule.dependencies, MtpRsaKeysManagerModule);
builder.register('MtpSecureRandom', MtpSecureRandomModule.dependencies, MtpSecureRandomModule);
builder.register('MtpSingleInstanceService', MtpSingleInstanceServiceModule.dependencies, MtpSingleInstanceServiceModule);
builder.register('MtpTimeManager', MtpTimeManagerModule.dependencies, MtpTimeManagerModule);

// Register Angular modules
builder.register('$http', $httpModule.dependencies, $httpModule);
builder.register('$interval', $intervalModule.dependencies, $intervalModule);
builder.register('$q', $qModule.dependencies, $qModule);
builder.register('$rootScope', $rootScopeModule.dependencies, $rootScopeModule);
builder.register('$timeout', $timeoutModule.dependencies, $timeoutModule);

// Register other modules
builder.register('CryptoWorker', CryptoWorkerModule.dependencies, CryptoWorkerModule);
builder.register('IdleManager', IdleManagerModule.dependencies, IdleManagerModule);
builder.register('qSync', qSyncModule.dependencies, qSyncModule);
builder.register('Storage', StorageModule.dependencies, StorageModule);
builder.register('TelegramMeWebService', TelegramMeWebServiceModule.dependencies, TelegramMeWebServiceModule);

// Register TelegramApi module
builder.register('TelegramApi', TelegramApiModule.dependencies, TelegramApiModule);

// Initialize modules
builder.init();

// Resolve TelegramApi
window.telegramApi = builder.resolve('TelegramApi');
