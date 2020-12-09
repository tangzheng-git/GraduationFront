// 基础配置

module.exports = function () {

  let src = './src/';
  let build = './dist/';

  return {
      src: src,
      build: build,
      index: src + 'index.html',
      css: [src + '**/*.css'],
      appJs: [src + 'app/**/*.js'],
      commonJs: [src + 'common/**/*.js'],
      componentJs: [src + 'components/**/*.js'],
      jsOrder: [
        '**/main.ts',       // 解决 项目主入口
        '**/app.*.ts',      // 解决 主入口相应配置
        '**/app.module.ts', // 解决 模块声明
        '**/app-routing.module.ts', // 解决 模块路由
        '**/*.js',          // 组件、resource入口
        '**/*.ts'           // 解决 其他
      ],
      cssOrder: [
        '**/app.component.css',  // 解决 项目主模块
        '**/*.component.css',    // 解决 业务子模块
        '**/*.css'               // 解决 其他
      ]
    };
}();
