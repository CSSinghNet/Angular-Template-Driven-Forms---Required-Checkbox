import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  model: any = {};

    onSubmit() {
        alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.model, null, 4));
    }
}
