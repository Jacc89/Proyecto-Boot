import { Component, OnDestroy, OnInit } from '@angular/core';
import { ContactoService } from 'src/app/services/contacto/contacto.service';
import { IContacto } from '../../models/interfaces/contacto';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.scss']
})
export class ListContactComponent implements OnInit, OnDestroy {

  listContac: IContacto[] = [];
  contactoSelect: IContacto | undefined;

  // suscribción  de servicio
  subscription: Subscription | undefined;

  constructor(private services: ContactoService) {}

  ngOnInit(): void {
  //  this.listContac =  this.services.obtenerContactos();   primera forma de devolucion de datos
    this.services.obtenerContactos()
    .then((list: IContacto[])=> this.listContac = list)
    .catch((error)=> console.error(`Ha habido un error  al recuperar los datos: ${error}`))
    .finally(()=> console.log('Petición de lista de contactos terminada'));
    
  //  console.table(this.listContac);
  }
// segunda formaa
  //  obtenerContact(id: number){
  //   // console.log(`Obtener info del contacto: ${id}`);
  //   //  this.contactoSelect = this.services.obtenerContactoPorId(id); primera forma
  //     this.services.obtenerContactoPorId(id)
  //     ?.then((contacto: IContacto) => this.contactoSelect = contacto)
  //     .catch(((error) => console.error(`Ha habido un error  al recuperar el contacto: ${error}`)))
  //     .finally(()=> console.log('Petición de contacto por id terminada'));
    
  //  }

  obtenerContact(id: number){
      this.services.obtenerContactoPorId(id)
      ?.subscribe((contacto: IContacto) => this.contactoSelect = contacto)
      
  
     }

     ngOnDestroy(): void {
         this.subscription?.unsubscribe();
     }




}
