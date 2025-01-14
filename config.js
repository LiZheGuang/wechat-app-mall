module.exports = {
  version: "6.5.8",
  note: '增加到店自提支持',
  subDomain: "e9219a34f803fcba2d20d2bb6b44fae4", // 如果你的域名是： https://api.it120.cc/abcd 那么这里只要填写 abcd
  appid: "wx0761989662f4c2b0", // 您的小程序的appid，购物单功能需要使用
  requireBindMobile: false // 是否强制绑定手机号码才能使用
}
/*
根据自己需要修改下单时候的模板消息内容设置，可增加关闭订单、收货时候模板消息提醒；
1、/pages/to-pay-order/index.js 中已添加关闭订单、商家发货后提醒消费者；
2、/pages/order-details/index.js 中已添加用户确认收货后提供用户参与评价；评价后提醒消费者好评奖励积分已到账；
3、请自行修改上面几处的模板消息ID，参数为您自己的变量设置即可。  
*/

