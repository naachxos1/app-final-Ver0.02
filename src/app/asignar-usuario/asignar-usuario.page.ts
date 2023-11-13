import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asignar-usuario',
  templateUrl: './asignar-usuario.page.html',
  styleUrls: ['./asignar-usuario.page.scss'],
})
export class AsignarUsuarioPage implements OnInit {

  constructor(private router: Router) {}

  iniciarSesion() {
    this.router.navigate(['/auth']);
  }


  ngOnInit() {
  }

}
