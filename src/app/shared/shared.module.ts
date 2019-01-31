import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
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
        FlexLayoutModule,
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
