import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  navbarOpen = false;
  private touchStartY: number = 0;
  private touchEndY: number = 0;
  private dynamicTextArray: string[] = ["Night", "Life", "Soul"]
  public dynamicText: string = this.dynamicTextArray[0];
  private count: number = 0;
  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.count++
      if (this.count > 2) {
        this.count = 0
      }
      this.dynamicText = this.dynamicTextArray[this.count]
    }, 2000);
  }

  toggleNavbar(): void {
    this.navbarOpen = !this.navbarOpen;
  }

  onTouchStart(event: TouchEvent): void {
    this.touchStartY = event.changedTouches[0].screenY;
  }

  onTouchEnd(event: TouchEvent): void {
    this.touchEndY = event.changedTouches[0].screenY;
    if (this.touchStartY - this.touchEndY > 80) { // Swipe up detection
      this.router.navigate(['/allEvents']);
    }
  }
}
