import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class LoaderComponent implements OnInit {

  isHidden: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.isHidden = true;
    }, 700);
  }

}
