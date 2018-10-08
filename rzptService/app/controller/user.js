'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {

	/*增加用户*/
	async addUser() {
		var {ctx} = this;
		var  data = ctx.query || {}
		var relust = await this.service.user.addUser(data);
		var res = {
			id:relust._id,
			role:relust.role,
			name:relust.name
		}
		ctx.helper.success({ctx,res})
	}
	/*用户登录*/
	async login(){
		var {ctx} = this;
		var data = ctx.query || {}
		var res = await this.service.user.login(data);
		if(res.length != 0){
			ctx.helper.success({ctx,res})
		}
	}

	/*用户增加*/
	async userPage() {
		var {ctx} = this;
		var data = {
			size:ctx.query.limit,
			nowPage:ctx.query.page
		}
		var res = await this.service.user.userPage(data);
		console.log("控制层",res)
		ctx.helper.success2({ctx,res})
	}

}

module.exports = UserController;
