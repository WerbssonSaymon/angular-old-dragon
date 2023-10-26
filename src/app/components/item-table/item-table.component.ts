import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface StoreItem {
  id: number;
  name: string;
  status: { 
    damage: number;
    critical: number;
    price: number;
  };
}

interface StoreData {
  weapons: StoreItem[];
}

@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.scss']
})
export class ItemTableComponent {

  weapons_data: StoreItem[] = [];

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get<StoreData>('../../../assets/database/stores_data.json').subscribe((data) => {
      this.weapons_data = data.weapons;
    });
  }
}
