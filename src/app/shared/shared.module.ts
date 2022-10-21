import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './star.component';
import { ConvertToSpace } from './convert-dash-to-space.pipe';

@NgModule({
  declarations: [ConvertToSpace, StarComponent],
  imports: [CommonModule],
  exports: [CommonModule, FormsModule, StarComponent, ConvertToSpace],
})
export class SharedModule {}
