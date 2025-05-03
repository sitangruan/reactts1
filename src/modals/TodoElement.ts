/**
 *  This the Todo element class
 */

export default class TodoElement {
  public UserId: number;
  public Id: number;
  public Title: string;
  public Completed: boolean;

  public constructor(_UserId: number, _Id: number, _Title: string, _Completed: boolean) {
    this.UserId = _UserId;
    this.Id = _Id;
    this.Title = _Title;
    this.Completed = _Completed;
  }
}