import { Component, OnInit } from '@angular/core';
import { multiScan } from 'rxjs-multi-scan';
import { HeroeService } from 'src/app/domain/service/heroes-service';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-hero-container',
  templateUrl: './hero-container.component.html',
  styleUrls: ['./hero-container.component.scss']
})
export class HeroContainerComponent implements OnInit {
private heroAdd = new Subject();
private heroRemove = new Subject();

public heroes$:Observable<any> = multiScan(
this.heroeService.getHeroes(), (heroes,loadHeroes) => [...heroes, ...loadHeroes ],
this.heroAdd, (heroes,addHeroes:any) => [...addHeroes],
this.heroRemove, (heroes,deleteHeroe:any) => [...deleteHeroe],
[]
)
  constructor(private heroeService: HeroeService) { }

  ngOnInit() {}

  public add(heroe:any) {
    this.heroeService.addHeroe(heroe).subscribe({
      next: heroe => { this.heroAdd.next(heroe) },
    })
  }

  public remove(heroe:any) {
    this.heroeService.deleteHeroe(heroe.id).subscribe({
      error: heroe => {},
      next: (heroes) => {
        this.heroRemove.next(heroes)
      }
    })
  }

}
