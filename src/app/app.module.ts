import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { TestpipesComponent } from './testpipes/testpipes.component'
import { SqrtPipe } from './testpipes/custompipes';
import { ChangetextDirective } from './changetext.directive';
import { RouterModule } from '@angular/router';
import { ServerElementComponent } from './server-element/server-element.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';
 
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    TestpipesComponent,
    SqrtPipe,
    ChangetextDirective,
    ServerElementComponent,
    CockpitComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
         path: 'new-server',
         component: ServerComponent
      },
      {
        path: 'new-testpipe',
        component: TestpipesComponent
      },
      {
        path: 'server-servers',
        component: ServersComponent
      }
   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
