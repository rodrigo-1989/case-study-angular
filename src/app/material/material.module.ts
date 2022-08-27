import { NgModule } from '@angular/core';

import { MatAutocompleteModule }    from '@angular/material/autocomplete';
import { MatButtonModule }          from '@angular/material/button';
import { MatCardModule }            from '@angular/material/card';
import { MatDialogModule }          from '@angular/material/dialog';
import { MatFormFieldModule }       from '@angular/material/form-field';
import { MatGridListModule }        from '@angular/material/grid-list';
import { MatIconModule }            from '@angular/material/icon';
import { MatInputModule }           from '@angular/material/input';
import { MatListModule }            from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule }          from '@angular/material/select';
import { MatSidenavModule }         from '@angular/material/sidenav';
import { MatSnackBarModule }        from '@angular/material/snack-bar';
import { MatToolbarModule }         from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatMenuModule,
    NgxDropzoneModule,
  ]
})
export class MaterialModule { }
