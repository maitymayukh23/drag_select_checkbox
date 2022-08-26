import { Component } from '@angular/core';
import { Box } from 'src/model/box';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'drag_select_checkboxes';

  totalBoxes: Box[] = [];
  total: number = 0;
  row: number = 0;
  column: number = 0;
  isMousePressed: boolean = false;

  onInputChange() {
    //empty the totalBoxes array
    this.totalBoxes = [];

    // retriving the entered value for rows and columns
    this.row = <number><unknown>((document.getElementById('row') as HTMLInputElement).value);
    this.column = <number><unknown>((document.getElementById('column') as HTMLInputElement).value);

    //calculating the total number of boxes
    this.total = this.row * this.column;

    //populating totalBoxes array with Box object.
    for (let i = 0; i < this.total; i++) {
      const b = new Box(i, false);
      this.totalBoxes.push(b);
    }

    //seting the number of column as CSS variable
    document.documentElement.style.setProperty("--col", <string><unknown>this.column);
  }

  onMouseUp() {
    this.isMousePressed = false;
  }
  onMouseDown() {
    this.isMousePressed = true;
  }

  //method called on mouseenter event
  selectCheckBox(id: number) {
    //retriving the status of the checkbox, TRUE: if checked, FALSE: if unchecked
    const boxChecked = (document.getElementById(<string><unknown>id) as HTMLInputElement).checked;

    //checking if the mouse is pressed
    if(this.isMousePressed){
      
      //if the checkbox is checked then making unchecking it and vice versa.
      if(boxChecked){
        (document.getElementById(<string><unknown>id)as HTMLInputElement).checked=false;
      }
      else{
        (document.getElementById(<string><unknown>id)as HTMLInputElement).checked=true;
      }
    }
  }
}
