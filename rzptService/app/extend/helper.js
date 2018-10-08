exports.success = ({ctx,res,msg='成功'}) => {
  ctx.body = {
      code:200,
      data:res,
      msg:msg
  }
  ctx.status = 200;
};