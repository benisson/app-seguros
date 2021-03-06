import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { SegurosComponent } from './seguros/seguros.component';
import { createCustomElement } from '@angular/elements';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CotacaoComponent } from './seguros/cotacao/cotacao.component';
import { CotacaoModule } from './seguros/cotacao/cotacao.module';
import { ContratarModule } from './seguros/contratar/contratar.module';

@NgModule({
  declarations: [
    SegurosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CotacaoModule,
    ContratarModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'cotacao'
        },
        {
          path: 'cotacao',
          component: CotacaoComponent
        },
        {
          path: 'contratar/:value',
          loadChildren: () => import('./seguros/contratar/contratar.module').then(m => m.ContratarModule)
        }
      ]
    )
  ],
  
  providers: [ ],
  entryComponents: [SegurosComponent]
  /*   bootstrap: [SegurosComponent] */
})
export class AppModule {

  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const appSeguros = createCustomElement(SegurosComponent, { injector: this.injector });
    try
    {
      customElements.define('app-seguros', appSeguros);
    }catch(e)
    {
      console.log(e);
    }
    
  }
}
