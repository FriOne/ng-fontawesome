import { ModuleWithProviders, NgModule } from '@angular/core';
import { FaIconComponent } from './fa-icon.component';
import { DomSanitizer } from '@angular/platform-browser';

@NgModule({
  declarations: [
    FaIconComponent
  ],
  exports: [
    FaIconComponent
  ],
})
export class FaModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FaModule,
      providers: [
        {provide: DomSanitizer, useExisting: DomSanitizer},
      ]
    };
  }
}
