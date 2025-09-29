import { Component, ElementRef, ViewChild, OnDestroy, OnInit, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit, OnDestroy {

  @ViewChild('robot', { static: true }) robotRef!: ElementRef<HTMLImageElement>;

  // controls
  robotEnabled = true;
  isReducedMotion = false; // set true later if you enable the media query

  // animation state
  private rafId = 0;
  private ease = 0.12;
  private targetX = 0;
  private targetY = 0;
  private posX = 0;
  private posY = 0;

  ngOnInit(): void {
    const loop = () => {
      if (!this.robotEnabled || this.isReducedMotion || !this.robotRef?.nativeElement) {
        this.rafId = requestAnimationFrame(loop);
        return;
      }

      this.posX += (this.targetX - this.posX) * this.ease;
      this.posY += (this.targetY - this.posY) * this.ease;

      const offset = 20; // keep robot a bit away from the exact pointer
      this.robotRef.nativeElement.style.transform =
        `translate3d(${this.posX + offset}px, ${this.posY + offset}px, 0)`;

      this.rafId = requestAnimationFrame(loop);
    };
    this.rafId = requestAnimationFrame(loop);
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.rafId);
  }

  /* Track pointer/touch */
  @HostListener('window:mousemove', ['$event'])
  @HostListener('window:pointermove', ['$event'])
  onPointerMove(e: MouseEvent | PointerEvent) {
    this.targetX = (e as PointerEvent).clientX;
    this.targetY = (e as PointerEvent).clientY;
  }

  @HostListener('window:touchmove', ['$event'])
  onTouchMove(e: TouchEvent) {
    if (e.touches.length) {
      this.targetX = e.touches[0].clientX;
      this.targetY = e.touches[0].clientY;
    }
  }
}
