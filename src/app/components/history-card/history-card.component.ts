import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface HistoryItem {
  id: number;
  title: string;
  subTitle: string;
  description: string;
}

interface HistoryData {
  historys: HistoryItem[];
}

@Component({
  selector: 'app-history-card',
  templateUrl: './history-card.component.html',
  styleUrls: ['./history-card.component.scss']
})
export class HistoryCardComponent implements OnInit {
  
  historys_data: HistoryItem[] = [];

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get<HistoryData>('../../../assets/database/historys_data.json').subscribe((data) => {
      this.historys_data = data.historys;
    });
  }
}
