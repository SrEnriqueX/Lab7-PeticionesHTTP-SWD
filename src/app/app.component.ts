import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetPostApiComponent } from "./get-post-api/get-post-api.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GetPostApiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PeticionesHTTP';
}
