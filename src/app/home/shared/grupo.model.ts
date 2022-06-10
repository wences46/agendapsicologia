 import { Paciente } from '../../admin/pacientes/shared/paciente.model';

 export interface Grupo{
    idGrupo:    number;
    fecha:      Date;
    total:      number;
    estado:     string;
    usuario:    null;
    items:      Item[];
 }

 export interface Item{
    id:             number;
    precio:         number;
    paciente:       Paciente;
 }