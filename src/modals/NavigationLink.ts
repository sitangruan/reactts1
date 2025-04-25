export default class NavigationLink {
  public Id: number;
  public DisplayName: string;
  public Route: string;
  public isDefaultLink: boolean;

  public constructor(_Id: number, _DisplayName: string, _Route: string, _IsDefaultLink = false) {
    this.Id = _Id;
    this.DisplayName = _DisplayName;
    this.Route = _Route;
    this.isDefaultLink = _IsDefaultLink;
  }
}