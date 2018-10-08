exports.success = ({ctx,res,msg='成功'}) => {
  ctx.body = {
      code:200,
      data:res,
      msg:msg
  }
  ctx.status = 200;
};

exports.success2 = ({ctx,res,msg = '请求成功',code}) => {
    ctx.body = {
        code:200,
        data:res,
        msg:msg,
        count:res.total
    }
    ctx.status = 200;
}