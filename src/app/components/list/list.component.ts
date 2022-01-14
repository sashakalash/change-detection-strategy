import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

export interface IItem {
  [key: string]: string;
}

/** Detached List */
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  constructor(private cd: ChangeDetectorRef) {
  }

  @Input() list: IItem[] = [];

  ngOnInit(): void {
    this.cd.detach(); // <--- detached list
    setTimeout(() => {
      this.cd.reattach(); // <--- reattached list
    }, 6000);
  }

}
