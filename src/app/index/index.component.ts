import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  pageTitle="Index Page";

  public constructor(private titleService: Title ) {
    titleService.setTitle(this.pageTitle );
   }

  ngOnInit() {
    
  }

}
