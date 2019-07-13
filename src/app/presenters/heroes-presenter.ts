import {Subject} from 'rxjs';

export class HeroePresenter {
  private add: Subject < any > = new Subject();
  public add$ = this.add.asObservable();
  private remove: Subject < any > = new Subject();
  public remove$ = this.remove.asObservable();

  public addHeroe(name: string) {
    name = name.trim();
    if (!name) return;
    this.add.next(name);
  };

  public removeHeroe(name: string) {
    if (!name) return;
    this.remove.next(name);
  };

}
