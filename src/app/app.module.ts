import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AccessButtonComponent } from './components/access-button/access-button.component';
import { MenuButtonComponent } from './components/menu-button/menu-button.component';
import { SignatureCreatorComponent } from './components/signature-creator/signature-creator.component';
import { EntityCardComponent } from './components/entity-card/entity-card.component';
import { HistoryCardComponent } from './components/history-card/history-card.component';
import { ItemTableComponent } from './components/item-table/item-table.component';
import { AccessComponent } from './pages/access/access.component';
import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { PlayersComponent } from './pages/players/players.component';
import { MonstersComponent } from './pages/monsters/monsters.component';
import { StoreComponent } from './pages/store/store.component';
import { HttpClientModule } from '@angular/common/http';
import { PlayerCardComponent } from './components/player-card/player-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccessButtonComponent,
    MenuButtonComponent,
    SignatureCreatorComponent,
    EntityCardComponent,
    HistoryCardComponent,
    ItemTableComponent,
    AccessComponent,
    HomeComponent,
    HistoryComponent,
    PlayersComponent,
    MonstersComponent,
    StoreComponent,
    PlayerCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
