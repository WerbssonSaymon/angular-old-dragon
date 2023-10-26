import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessComponent } from './pages/access/access.component';
import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { PlayersComponent } from './pages/players/players.component';
import { MonstersComponent } from './pages/monsters/monsters.component';
import { StoreComponent } from './pages/store/store.component';

const routes: Routes = [
  {
    path: '',
    component: AccessComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'home/history',
    component: HistoryComponent
  },
  {
    path: 'home/players',
    component: PlayersComponent
  },
  {
    path: 'home/monsters',
    component: MonstersComponent
  },
  {
    path: 'home/store',
    component: StoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
