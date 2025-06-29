import { isPlatformBrowser } from '@angular/common';
import { AnimationService } from './../../service/animation.service';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  inject,
  OnDestroy,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { AnimatedTitleComponent } from '../animated-title/animated-title.component';

@Component({
  selector: 'app-about',
  imports: [AnimatedTitleComponent],
  templateUrl: './about.component.html',
})
export class AboutComponent implements AfterViewInit, OnDestroy {
  @ViewChild('clip', { static: true }) clip!: ElementRef;
  @ViewChild('maskClip', { static: true }) maskClip!: ElementRef;
  #animationService = inject(AnimationService);

  constructor(@Inject(PLATFORM_ID) private platform_Id: object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platform_Id)) {
      this.#animationService.timelineAnimation(this.clip, this.maskClip);
    }
  }
  ngOnDestroy(): void {}
}
