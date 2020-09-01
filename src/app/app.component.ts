import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Список пользователей';
  users: string[] = ['Smith', 'Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}
