/**
 *  This the Post element class
 */

export default class PostElement {
  public UserId: number;
  public Id: number;
  public Title: string;
  public Body: string;

  public constructor(_UserId: number, _Id: number, _Title: string, _Body: string) {
    this.UserId = _UserId;
    this.Id = _Id;
    this.Title = _Title;
    this.Body = _Body;
  }
}