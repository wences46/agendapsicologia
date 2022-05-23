import { Injectable } from '@angular/core';
import { Paciente } from '../../admin/pacientes/shared/paciente.model';


@Injectable({
  providedIn: 'root'
})
export class ColectorService {
  private key = 'agendaPsico2022';
  
  private _items: Paciente[] = [];

  constructor() { 
    const colectorString = localStorage.getItem(this.key);

    this._items = colectorString ? JSON.parse(colectorString) : [];
     
  }
  

  get items(){
    return this._items;
  }


  agregarItem(paciente: Paciente) {
    this._items.push(paciente);
    this.guardarEnLocalStorage();
  }
  removerItem(paciente: Paciente) {
    this._items = this._items.filter(i => i.idPaciente != paciente.idPaciente);
    this.guardarEnLocalStorage();

  }
  removerItems() {
    this._items= [];
    this.guardarEnLocalStorage();
  }
  itemYaExiste(paciente: Paciente) {
    return this._items.findIndex(i => i.idPaciente == paciente.idPaciente) >= 0;
  }

  guardarEnLocalStorage(){
    localStorage.setItem(this.key, JSON.stringify(this._items));
        
  }

}
