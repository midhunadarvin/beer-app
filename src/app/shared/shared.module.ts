import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
    MatCardModule
} from '@angular/material';
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
    ],
    exports: [
        CommonModule,
        FormsModule,
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
        ListComponent,
        ListItemComponent,
        SearchComponent
    ],
    providers: [],
})
export class SharedModule {}
