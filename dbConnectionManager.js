const makeSchema=require('./makeMongooseModel');
makeSchema('accounts',require('./account/account'));


function connectionManager(dbProvider) {
    dbProvider.connection.on('connected', () => {
        console.log('Connection Established')
      })
      
      dbProvider.connection.on('reconnected', () => {
        console.log('Connection Reestablished')
      })
      
      dbProvider.connection.on('disconnected', () => {
        console.log('Connection Disconnected')
      })
      
      dbProvider.connection.on('close', () => {
        console.log('Connection Closed')
      })
      
      dbProvider.connection.on('error', (error) => {
        console.log('ERROR: ' + error)
      })

    return function connect(connectionString) {
        return  dbProvider.connect(connectionString, {
        autoReconnect: true,
        reconnectTries: 1000000,
        reconnectInterval: 3000
  })
    }
}

module.exports=connectionManager;