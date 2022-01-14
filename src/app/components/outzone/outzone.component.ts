import { Component, Input, NgZone, OnInit } from '@angular/core';
import { IItem } from '../list/list.component';

@Component({
  selector: 'app-outzone',
  templateUrl: '../list/list.component.html',
  styleUrls: ['./outzone.component.scss']
})
export class OutzoneComponent implements OnInit {

  @Input() _list: IItem[] = []

  public list: IItem[] = [];

  constructor(ngZone: NgZone) {
    ngZone.runOutsideAngular(() => this.list = this._list); // <---- outside Angular Zone
    setTimeout(() => this.list = this._list, 5000); //<---- inside Angular Zone

  }

  ngOnInit(): void {
  }

}
