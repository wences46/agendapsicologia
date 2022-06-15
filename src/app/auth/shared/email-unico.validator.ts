import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { Observable, map, catchError, of } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class EmailUnicoValidator implements AsyncValidator {

    constructor(
        private authService: AuthService
    ) {
    }
    
    validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        return this.authService.verficarEmail(control.value)
            .pipe(
                map((response: any) => response.exists ? { emailExiste: true } : null),
                catchError(() => of(null))
            )
    }

}