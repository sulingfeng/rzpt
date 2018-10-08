'use strict';

const Service = require('egg').Service;

class UserService extends Service {
	/*增加用户*/
  async addUser(data) {
    console.log("服务层",data.name,data.pwd,data.phone,data.uid)
    var user = new this.ctx.model.User({
    	name:data.name,
    	pwd:data.pwd,
    	phone:data.phone,
    	uid:data.uid
    })
    var resule = await user.save();
    return resule;
  }

  /*用户登录*/
  async login(data){
  	var {ctx,service} = this;
  	var user = await this.ctx.model.User.find({name:data.name});
  	if(user.length == 0){
  		ctx.throw(404,'用户没有找到')
  	}
  	if(user[0].pwd != data.pwd){
  		ctx.throw(404,'用户密码不正确')
  	}
  	//token,未做
  	var data = {
            name:user[0].name,
            role:user[0].role,
            token:'1',
            id:user[0]._id,
        }
        return data;
  	}

  	/*用户分页获取*/
  	async userPage(data){
  		var result = await this.ctx.model.User.find()
  		.skip(Number(data.nowPage))
  		.limit(Number(data.size))
  		.sort({ createdAt: -1 }).exec()
      result.total = Math.ceil(await this.ctx.model.User.count()/data.size)
      return result;
  	}

}

module.exports = UserService;
