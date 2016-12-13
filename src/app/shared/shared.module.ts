import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HeaderComponent }   from './header/header.component';
import { FooterComponent }   from './footer/footer.component';
import { HeroimageComponent }   from './heroimage/heroimage.component';
import { TableGlobalComponent }   from './table-global/table_global.component';
import { InstancePhotoComponent }   from './instance-photo/instance_photo.component';
import { TableViewComponent }   from './table-view/table_view.component';

@NgModule({
    imports: [RouterModule, CommonModule],
    exports: [HeaderComponent, FooterComponent, HeroimageComponent, TableGlobalComponent, InstancePhotoComponent, TableViewComponent], 
    declarations: [HeaderComponent, FooterComponent, HeroimageComponent, TableGlobalComponent, InstancePhotoComponent, TableViewComponent],
    providers: []
})
export class SharedModule { }
