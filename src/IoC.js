// Create container
var builder = new ContainerModule();

// Register App modules
builder.register('AppChatsManager', AppChatsManagerModule);
builder.register('AppPeersManager', AppPeersManagerModule);
builder.register('AppProfileManager', AppProfileManagerModule);
builder.register('AppUsersManager', AppUsersManagerModule);

// Register Mtp modules
builder.register('MtpApiFileManager', MtpApiFileManagerModule);
builder.register('MtpApiManager', MtpApiManagerModule);
builder.register('MtpAuthorizer', MtpAuthorizerModule);
builder.register('MtpDcConfigurator', MtpDcConfiguratorModule);
builder.register('MtpNetworkerFactory', MtpNetworkerFactoryModule);
builder.register('MtpRsaKeysManager', MtpRsaKeysManagerModule);
builder.register('MtpSecureRandom', MtpSecureRandomModule);
builder.register('MtpSingleInstanceService', MtpSingleInstanceServiceModule);
builder.register('MtpTimeManager', MtpTimeManagerModule);

// Register Angular modules
builder.register('$http', $httpModule);
builder.register('$interval', $intervalModule);
builder.register('$q', $qModule);
builder.register('$rootScope', $rootScopeModule);
builder.register('$timeout', $timeoutModule);

// Register other modules
builder.register('CryptoWorker', CryptoWorkerModule);
builder.register('IdleManager', IdleManagerModule);
builder.register('qSync', qSyncModule);
builder.register('Storage', StorageModule);
builder.register('TelegramMeWebService', TelegramMeWebServiceModule);
builder.register('jQuery', jQueryModule);
builder.register('FileSaver', FileSaverModule);

// Register TelegramApi module
builder.register('TelegramApi', TelegramApiModule);

// Initialize modules
builder.init();

// Resolve TelegramApi
window.telegramApi = builder.resolve('TelegramApi');
