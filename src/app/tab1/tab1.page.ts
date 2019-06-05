import { Component } from "@angular/core";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  constructor() {}

  testTypeScript() {
    return "Hello Type Script";
  }

  sayHello(): void {
    console.log("Hello");
  }

  neverHappens(): never {
    throw new Error("Boom!");
  }
}
