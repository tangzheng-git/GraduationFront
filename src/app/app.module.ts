import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
// 引入组件 模块 服务



// 用NgModule装饰器声明一个模块
@NgModule({
  declarations: [
    // 声明组件
    // 声明指令
    // 声明管道
    AppComponent,
    HeadComponent
  ],
  imports: [
    // 引入 | 声明 依赖的其他模块
    BrowserModule,
    AppRoutingModule,
  ],
  // 引入 | 声明 所以服务 默认为空
  providers: [],
  // 引导 | 声明组件
  bootstrap: [AppComponent]
})
export class AppModule { }
