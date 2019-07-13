import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { of, empty, Observable } from 'rxjs';

@Injectable({
    providedIn:"root"
})
export class HeroeService {
API = 'assets/heroes.json';
heroes:any
    constructor(private http:HttpClient){}

    public getHeroes() {
        if(!this.heroes) {
            return this.http.get(this.API).pipe(
                tap(heroes =>  this.heroes = heroes)
            )
        }
        return of(this.heroes)
        
    }

    public deleteHeroe(id:number) {
        if(this.heroes) {
            return of(
                this.heroes = this.heroes.filter(h =>  h.id !== id)
            )
        }
    }

    public addHeroe(heroe) {
        this.heroes.push(heroe)
        return of(this.heroes)
    }

    
}