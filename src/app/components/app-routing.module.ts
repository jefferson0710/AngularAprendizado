import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstComponentComponent } from "./first-component/first-component.component";
import { ListRenderComponent } from "./list-render/list-render.component";


const routes: Routes = [
    {path:'', component: FirstComponentComponent},
    {path:'list', component: ListRenderComponent}

]

@NgModule({
    declarations:[],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
}
)

export class AppRoutingModule {}