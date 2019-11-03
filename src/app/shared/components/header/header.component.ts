import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() labels;

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.labels = changes.labels.currentValue;
  }

  navigate(obj) {
    alert("work in progress.. will navigate to " + obj.link + " page");
    // this.route.navigate(['/' + obj.link]);
  }
}
