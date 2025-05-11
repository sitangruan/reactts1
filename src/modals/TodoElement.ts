/**
 *  This the Todo element class
 */

export class TodoElementCore {
  public UserId: number;
  public Title: string;
  public Completed: boolean;

  public constructor(_UserId: number, _Title: string, _Completed: boolean) {
    this.UserId = _UserId;
    this.Title = _Title;
    this.Completed = _Completed;
  }
}

export default class TodoElement extends TodoElementCore {
  public Id: number;

  public constructor(_UserId: number, _Id: number, _Title: string, _Completed: boolean) {
    super(_UserId, _Title, _Completed);
    this.Id = _Id;
  }
}