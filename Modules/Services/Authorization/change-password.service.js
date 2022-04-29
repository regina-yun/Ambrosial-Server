const User = require('../../ORM/ambrosial/user.model');

const {generateHash} = require('../../Authorization/hash');

module.exports = {
  
  changePassword: async(request) => {

    let result = {
      status: null,
      message: null
    }

    const changePasswordData = await User.findOne({where: {username: request.username}});

    if(!changePasswordData) {
      result.status = 404;
      result.message = `User does not exist. Kindly register`;
      return result;
    }

    result.status = 200;
    result.message = `Password has been changed`;
  
    let newHash = await generateHash(request.password);
    
    return result;
  }
}