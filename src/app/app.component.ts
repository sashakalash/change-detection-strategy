import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { IItem } from './components/list/list.component';

const ITEMS = () => {
  const res = [];
  for (let i = 0; i < 100; i++) {
    res.push({ title: `item - ${Math.floor(Math.random() * (100 - 0 + 1) + 0)}` });
  }
  return res;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush // <--- broke data passing to children
})
export class AppComponent implements OnInit {

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    setInterval(() => this.items = [], 2700);
    setInterval(() => this.items = ITEMS(), 3000);
  }

  private _items: IItem[] = ITEMS();

  set items(val: IItem[]) {
    this.cd.markForCheck(); // <--- fix data passing to children
    this._items = val;
  }

  get items() {

    return this._items;
  }
}
