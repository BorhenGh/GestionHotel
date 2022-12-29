import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';


const materials = [MatDialogModule,MatButtonModule,MatIconModule,MatInputModule,MatDatepickerModule,MatNativeDateModule,MatSelectModule]



@NgModule({

  imports: [materials],
  exports: [materials],
})
export class MaterialModule { }
