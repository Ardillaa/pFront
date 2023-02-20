import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Organizador } from 'src/app/models/organizador';
import { OrganizadorCarrera } from 'src/app/models/organizadorCarrera';
import { CarreraService } from 'src/app/services/carrera.service';
import { OrganizadorService } from 'src/app/services/organizador.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-ver-carrera',
  templateUrl: './ver-carrera.component.html',
  styleUrls: ['./ver-carrera.component.css']
})
export class VerCarreraComponent {

  general: boolean | null;
  id: string | null;
  orgCarrera: OrganizadorCarrera | null;
  carrera: string | null;
  ciudad: string | null;
  fecha: string | null;
  cinicio: string | null;
  corredores: string | null;

  listOrganizadores: Organizador[] = []; 

  constructor(private _organizadorService: OrganizadorService,
              private aRoute: ActivatedRoute,
              private _carreraService: CarreraService){ 

      this.id = this.aRoute.snapshot.paramMap.get('id');
      this.orgCarrera = new OrganizadorCarrera("","");
      this.general=false;
      this.carrera = "";
      this.cinicio = "";
      this.ciudad ="";
      this.fecha ="";
      this.corredores="";
  }

  ngOnInit(): void {
    if(this.id!=null){
        this.getCarrera();
        this.getOrganizadoresConId();
    }
  }

  getOrganizadoresConId() {
    if(this.id!=null){
      this._organizadorService.getOrganizadoresCarrera(this.id).subscribe(data => {
        this.listOrganizadores= data;
      }, error => {
        console.log(error);
      })
    }
  }

  getCarrera() {
    if(this.id!=null){
      this._carreraService.getCarrera(this.id).subscribe(data => {
        this.carrera = data.nombre;
        this.ciudad = data.ciudad,
        this.fecha = data.fecha,
        this.cinicio = data.cinicio,
        this.corredores = data.numCorredores
      });
    }
  }

  pdf(){
      const html= document.getElementById('impr');
      const doc = new jsPDF('p', 'pt', 'a4');
      const options = {
        background: 'white',
        scale: 3
      };
      if(html!=null){
        html2canvas(html, options).then((canvas) => {
    
          const img = canvas.toDataURL('image/PNG');
    
          // Add image Canvas to PDF
          const bufferX = 5;
          const bufferY = 5;
          const imgProps = (doc as any).getImageProperties(img);
          const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
          const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
          doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
          return doc;
        }).then((docResult) => {
          docResult.save(`${this.carrera}_${new Date().toISOString()}.pdf`);
        });
      }
  }
}
