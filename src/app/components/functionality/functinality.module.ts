import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OneComponent } from "./one/one.component";

@NgModule({
  declarations: [OneComponent],
  imports: [CommonModule],
  exports: [OneComponent]
})
export class FunctinalityModule {}
