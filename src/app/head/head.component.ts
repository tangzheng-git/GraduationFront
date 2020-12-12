import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(
      // tslint:disable-next-line:only-arrow-functions typedef
      function() {
        $('#text').bind('click',
          // tslint:disable-next-line:only-arrow-functions typedef
          function() {
            alert('我的id为text，你点击时触发');
          });

        $('#text1').on('click',
          // tslint:disable-next-line:only-arrow-functions typedef
          function() {
            alert('hellworld');
          });

        $('#text2').click(
          // tslint:disable-next-line:only-arrow-functions typedef
          function() {
            alert($('#text2').val());
          });
      });

    $('#aaa').html('123456');


  }

}
