'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/user/add', controller.user.addUser);
  router.get('/user/login', controller.user.login);
  router.get('/user/page', controller.user.userPage);
};
