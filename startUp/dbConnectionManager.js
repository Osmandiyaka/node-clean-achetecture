const mongoose = require("mongoose");
mongoose.Promise = Promise;

function connectionManager(appConfig) {
  mongoose.connection.on('connected', () => {
        console.log('Connection Established')
      })
      
      mongoose.connection.on('reconnected', () => {
        console.log('Connection Reestablished')
      })
      
      mongoose.connection.on('disconnected', () => {
        console.log('Connection Disconnected')
      })
      
      mongoose.connection.on('close', () => {
        console.log('Connection Closed')
      })
      
      mongoose.connection.on('error', (error) => {
        console.log('ERROR: ' + error)
      })

      return {
        connect:connect
      }
     function connect() {
       const connectionString=`mongodb://localhost:27017/${appConfig.database}`;
        return  mongoose.connect(connectionString, {
        autoReconnect: true,
        reconnectTries: 1000000,
        reconnectInterval: 3000})
    }
}

module.exports=connectionManager;