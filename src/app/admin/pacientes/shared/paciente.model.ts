export interface PacientePage{
    content:            Paciente[];
    pageable:           Pageable;
    last:               boolean;
    totalElements:      number;
    totalPages:         number;
    number:             number;
    size:               number;
    sort:               Sort;
    first:              boolean;
    numberOfElements:   number;
    empty:              boolean; 
}

export interface Paciente {
    id:              number;
    nombre:          string;
    apePat:          string;
    apeMat:          string;
    numExp:          string;
    telContacto:     string;
    fechaNacimiento: Date;
    estado:          null | string;
    rutaPortada:     string;
    descripcion:     string;
    precio:          number;
    tutor:           string;
}


export interface Pageable{
    sort:               Sort;
    offset:             number;
    pageNumber:         number;
    pageSize:           number;
    paged:              boolean;
    unpaged:            boolean;
}

export interface Sort{
    empty:              boolean;
    sorted:             boolean;
    unsorted:           boolean;
}
