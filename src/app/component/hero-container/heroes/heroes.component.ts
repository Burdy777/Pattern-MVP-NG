import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { HeroePresenter } from 'src/app/presenters/heroes-presenter';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [HeroePresenter]
})
export class HeroesComponent implements OnInit, OnDestroy {
  @Input() heroes: any[];
  @Output() add = new EventEmitter();
  @Output() remove = new EventEmitter();
  onDestroy: Subject < any > = new Subject();

  constructor(private heroePresenter: HeroePresenter) {}

  ngOnInit() {
    this.heroePresenter.add$.
    pipe(takeUntil(this.onDestroy))
      .subscribe(name => {
        this.add.emit({
          id: this.heroes.length,
          name,
          power: []
        });
      })

    this.heroePresenter.remove$.
    pipe(
        takeUntil(this.onDestroy)
      )
      .subscribe(heroe => {
        this.remove.emit(heroe);
      })
  }



  addHeroe(name: string) {
    this.heroePresenter.addHeroe(name);
  }

  removeHeroe(heroe) {
    this.heroePresenter.removeHeroe(heroe)
  }

  ngOnDestroy() {
    this.onDestroy.next();
    this.onDestroy.complete();
  }
}
