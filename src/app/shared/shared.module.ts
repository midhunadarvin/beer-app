import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import {
    MatRadioModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    MatAutocompleteModule
} from '@angular/material';
import { StarRatingModule } from 'angular-star-rating';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
    declarations: [
        ListItemComponent,
        ListComponent,
        SearchComponent
    ],
    imports: [
        ToastrModule.forRoot(),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgxSpinnerModule,
        HttpClientModule,
        FlexLayoutModule,
        MatRadioModule,
        MatInputModule,
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatPaginatorModule,
        StarRatingModule.forRoot(),
        MatAutocompleteModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgxSpinnerModule,
        HttpClientModule,
        FlexLayoutModule,
        MatRadioModule,
        MatInputModule,
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatPaginatorModule,
        StarRatingModule,
        MatAutocompleteModule,
        ListComponent,
        ListItemComponent,
        SearchComponent
    ],
    providers: [],
})
export class SharedModule {}
