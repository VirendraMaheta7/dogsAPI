import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatFactsComponent } from './cat-facts/cat-facts.component';
import { RandomDogComponent } from './random-dog/random-dog.component';


const routes: Routes = [
  {
    path: 'app-cat-facts', component : CatFactsComponent
  },
  {
    path: 'app-random-dog', component: RandomDogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
