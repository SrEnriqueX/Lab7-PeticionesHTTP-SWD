import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GetPostService } from '../services/get-post.service';

@Component({
  selector: 'app-get-post-api',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './get-post-api.component.html',
  styleUrl: './get-post-api.component.css',
})
export class GetPostApiComponent implements OnInit {
  depObj: any = {
    departmentId: 0,
    departmentName: '',
    departmentLogo: '',
  };
  listaDepartamento: any[] = [];
  title:string="GET Y POST";

  constructor(private getPost: GetPostService) {}
  ngOnInit(): void {
    this.getDepart();
  }

  guardar() {
    // Llamar al servicio para crear el departamento
    this.getPost
      .agregarDepartamento(this.depObj)
      .subscribe((resultado: any) => {
        if (resultado.result) {
          alert('Departamento creado');
          this.getDepart()// Recargar la lista de departamentos
        } else {
          alert(resultado.message);
        }
      });
  }

  getDepart() {
    // Llamar al servicio para obtener la lista de departamentos
    this.getPost.getDepartamento().subscribe((resultado: any) => {
      this.listaDepartamento = resultado.data;
    });
  }
}
