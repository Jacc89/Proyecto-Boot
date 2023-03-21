import { Injectable } from '@angular/core';
import { IContacto } from '../../components/models/interfaces/contacto';
import { CONTACTOS } from '../../Mocks/contactos.muck';

// importados observables de rjsx
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor() { }
// primer metodo  para devolucion de  datos
//   obtenerContactos():IContacto[]{

//     // LISTADO DE CONTACTOS
//     return CONTACTOS;  

//   }
// // listado por  id
//   obtenerContactoPorId(id: number){
//     const contacto = CONTACTOS.find((contacto: IContacto )=> contacto.id === id);

//     if (contacto) {
//       return contacto;
      
//     }else {
//       return;
//     }
//   }

// promesas de devolucion de  datos

obtenerContactos(): Promise<IContacto[]>{
   return Promise.resolve(CONTACTOS);
}

// obtenerContactoPorId(id: number): Promise<IContacto> | undefined{

//   const contacto = CONTACTOS.find((contacto: IContacto )=> contacto.id === id);

//       if (contacto) {
//         return Promise.resolve(contacto);
        
//       }else {
//         return;
//       }

// }

// observable  tercera  observables

obtenerContactoPorId(id: number): Observable<IContacto> | undefined{

    const contacto = CONTACTOS.find((contacto: IContacto )=> contacto.id === id);

    // Creacion de observqble
    let observable: Observable<IContacto> = new Observable(observer =>{
      observer.next(contacto);   // emitir un valor a todos componente suscribe
      observer.complete();   // no emitimos  mas valores
    })

  
        if (contacto) {
          return observable;
          
        }else {
          return;
        }
  
  }






}
