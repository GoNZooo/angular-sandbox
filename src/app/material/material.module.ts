import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';

const MaterialComponents = [
  MatButtonModule,
  MatInputModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatDialogModule,
  MatIconModule,
  MatRippleModule,
  MatBadgeModule,
  MatCardModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatListModule,
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule {}
