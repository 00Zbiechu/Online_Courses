import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  isHidden: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.isHidden = true;
    }, 1000);
  }

}
