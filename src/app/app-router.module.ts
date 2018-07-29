import { NgModule } from "@angular/core";
import { Routes, PreloadAllModules, RouterModule } from "@angular/router";
import { SigninComponent } from "./auth/signin/signin.component";
import { HomeComponent } from "./home/home.component";
import { StartComponent } from "./home/start/start.component";
import { SignInGuard } from "./auth/guard/signin.guard";
import { AdminGuard } from "./auth/guard/admin.guard";
import { ContactComponent } from "./core/contact/contact.component";





const routes: Routes = [
    {path: '', component: HomeComponent, children: [
        {path: '', component: StartComponent}, 
        {path: 'contact', component: ContactComponent},         
        {path: 'signin', component: SigninComponent, canActivate:[SignInGuard]},     
        {path: 'admin', loadChildren: './admin/admin.module#AdminModule', canActivate: [AdminGuard]},      
        {path: ':news', loadChildren: './news/news.module#NewsModule'},  
    ]}  
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, 
          { preloadingStrategy: PreloadAllModules, 
            useHash: true, 
            onSameUrlNavigation: 'reload'})
      ],
    exports: [RouterModule]
})

export class AppRoutingModule {
   constructor(){}
}