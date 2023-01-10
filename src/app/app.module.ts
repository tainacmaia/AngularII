import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './users/users.component';
import { CreateUserComponent } from './users/components/create-user/create-user.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ListComponent } from './users/components/list/list.component';
import { MatCardModule } from '@angular/material/card';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask'
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MAT_DATE_LOCALE} from '@angular/material/core';
import { ProductsComponent } from './products/products.component';
import {MatMenuModule} from '@angular/material/menu';
import { CreateProductComponent } from './products/components/create-product/create-product.component';
import { ProductsListComponent } from './products/components/products-list/products-list.component';
import { HomeComponent } from './components/home/home.component';

const material = [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule
];
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CreateUserComponent,
    NotFoundComponent,
    ListComponent,
    ProductsComponent,
    CreateProductComponent,
    ProductsListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    FormsModule,
    ReactiveFormsModule,
    material
    //pode digitar os módulos direto aqui em vez de chamar uma variável
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }, provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
