import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { CatComponent } from "./components/cat/cat.component";

const routes: Routes = [
    { path: '', component: CatComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CatRoutingModule { }
