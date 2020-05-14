module.exports = {
  mongodbMemoryServerOptions: {
    instance: {
      dbName: 'test',
    },
    binary: {
      version: '3.5.7',
      skipMD5: true,
    },
    autoStart: false,
  },
};
