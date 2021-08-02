const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt= require('bcryptjs')
const logger = require('../lib/logger')



const userSchema= mongoose.Schema({
    email       :   {type: String, unique:true, required:true},
    password    :   {type: String, required: false},
    is_verified :   {type: Boolean, default:false},
    role        :   {type: String, maxlength: 50, required: true},



},{timestamps   :{
    createdAt   :   'created_at',
    updatedAt   :   'updated_at'
}})

userSchema.methods.generate_hash = function(password){
    try {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)

    } catch (error) {
        logger.error(error)
        return false;
        
    }
};

userSchema.pre('save', function(next){

    if(!this.password) return next();

    try {

        this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8), null);
        return next();
        
    } catch (err) {
        logger.error(err);
        throw new Error('Password hashing failed');
    }

});

userSchema.methods.valid_password = function(password) {

    try {

        return bcrypt.compareSync(password, this.password);
        
    } catch (err) {
        logger.error(err)
        return false;
    }
};

userSchema.methods.generateAuthToken= function(){
    const token= jwt.sign(
      {
        email:this.email,
        _id:this._id,
        is_verified:this.is_verified,
        role:this.role,  
      },"secret")  
    return token;
  
  }

module.exports = mongoose.model('user', userSchema,'users');
