import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./index/index.module').then(m => m.IndexPageModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then((m) => m.LoginPageModule) },
  { path: 'layerselect', loadChildren: () => import('./layerselect/layerselect.module').then((m) => m.LayerselectPageModule) },
  { path: 'edit', loadChildren: () => import('./edit/edit.module').then((m) => m.EditPageModule) },
  { path: 'edit/:id', loadChildren: () => import('./edit/edit.module').then((m) => m.EditPageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
