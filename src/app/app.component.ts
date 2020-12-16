import { Component } from '@angular/core';

// 用装饰器定义了一个组件以及组件的元数据
// 所有的组件都必须使用这个装饰器来注解
// 组件元数据 Angular会通过这里面的属性来渲染组件并执行逻辑

// Angular框架如何处理一个TypeScript类.
// 组件元数据装饰器（@Component）
@Component({
  // 通过 <app-root> 的HTML页面标签来来调用
  selector: 'app-root',
  // 指定一个html文件作为组件的模板，定义了组件的布局和内容
  // 使用Angular的数据绑定语法
  templateUrl: './app.component.new.html',
  // 指定一组css文件
  styleUrls: ['./app.component.css']
})
// 该组件的控制器
// 在这个类中编写业务逻辑
export class AppComponent {
  title = 'GraduationFront';
  constructor() { }
}
