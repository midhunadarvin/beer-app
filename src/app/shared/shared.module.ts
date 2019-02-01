import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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

@NgModule({
    declarations: [],
    exports: [
        CommonModule,
        HttpClientModule,
        FlexLayoutModule,
        MatRadioModule,
        MatInputModule,
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatFormFieldModule
    ],
    providers: [],
})
export class SharedModule {}
