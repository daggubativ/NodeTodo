var configValues = require('./config');


module.exports = {
    getDbConnectionString : function(){
        return 'mongodb://' +configValues.uname + ':'+ configValues.pwd+'@ds059125.mlab.com:59125/nodetodosample'
    }
}