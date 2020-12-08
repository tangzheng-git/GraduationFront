import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// 用NgModule装饰器声明一个模块
@NgModule({
  declarations: [
    // 声明组件
    // 声明指令
    // 声明管道
    AppComponent
  ],
  imports: [
    // 声明依赖的其他模块
    BrowserModule
  ],
  // 声明服务 默认为空
  providers: [],
  // 声明组件
  bootstrap: [AppComponent]
})
export class AppModule { }
