import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface MonsterItem {
  id: number;
  name: string;
  type: string;
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

interface MonsterData {
  monsters: MonsterItem[];
}

@Component({
  selector: 'app-entity-card',
  templateUrl: './entity-card.component.html',
  styleUrls: ['./entity-card.component.scss']
})
export class EntityCardComponent {

  monsters_data: MonsterItem[] = [];

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get<MonsterData>('../../../assets/database/monsters_data.json').subscribe((data) => {
      this.monsters_data = data.monsters;
    });
  }
}
