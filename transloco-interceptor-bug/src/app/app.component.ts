import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'transloco-interceptor-bug';

  public constructor(private translocoService: TranslocoService) {}

  public changeLang(e: any) {
    this.translocoService.setActiveLang(e.target.value)
  }
}
