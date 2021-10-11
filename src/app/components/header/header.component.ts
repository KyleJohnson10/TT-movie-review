import { Component, OnInit, HostListener } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  hasScrolled = false;

  @HostListener("window:scroll", []) onWindowScroll() {
    const verticalOffset =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (verticalOffset > 50) {
      this.hasScrolled = true;
    } else {
      this.hasScrolled = false;
    }
  }

  constructor() {}

  ngOnInit() {
  }
}
