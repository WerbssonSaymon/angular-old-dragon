import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface PlayerItem {
  id: number;
  name: string;
  rice: string;
  class: string;
  life: number;
  level: number;
  status: { 
    for: number;
    des: number;
    con: number;
    int: number;
    sab: number;
    car: number;
  };
  description: string;
}

interface PlayerData {
  players: PlayerItem[];
}

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent {

  players_data: PlayerItem[] = [];

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get<PlayerData>('../../../assets/database/players_data.json').subscribe((data) => {
      this.players_data = data.players;
    });
  }
}
