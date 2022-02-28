import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogBoceComponent } from './dialog-boce/dialog-boce.component';
import { DialogBubeComponent } from './dialog-bube/dialog-bube.component';
import { DialogRasoComponent } from './dialog-raso/dialog-raso.component';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  constructor(public dialog: MatDialog) {}
  title = 'vista-heroes';
  
  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


openDialogBoce() {
  const dialogRef = this.dialog.open(DialogBoceComponent);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}


openDialogBube() {
  const dialogRef = this.dialog.open(DialogBubeComponent);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}


openDialogRaso() {
  const dialogRef = this.dialog.open(DialogRasoComponent);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}
}

