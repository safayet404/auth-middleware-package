const  { protectRoute,isAdminRoute  } = require('./lib/auth')

const createJWT = require('./lib/token')


module.exports = {protectRoute,isAdminRoute,createJWT}
