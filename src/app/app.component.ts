import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  myClickFunction(event) {
    //just added console.log which will display the event details in browser on click of the button.
    alert("SURPRISE!!!");
    console.log(event);
  }

  myPuzzle1(event) {
    alert("123456789 --- 10 Puzzle 1");
    console.log(event);
  }

  myPuzzle2(event) {
    alert("10 --- 987654321 Puzzle 2");
    console.log(event);
  }

  myPuzzle3(event) {
    alert("11 12 13 15 16 Puzzle 3");
    console.log(event);
  }
}
