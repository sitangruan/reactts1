/**
 * This it the PostAction.
 */

import { PostActionType } from "../common/constants";
import PostElement from "./PostElement";

export default class PostAction {
  public Type: PostActionType;
  public Data: Array<PostElement> | PostElement;

  public constructor(_Type: PostActionType, _Data: Array<PostElement> | PostElement) {
    this.Type = _Type;
    this.Data = _Data;
  }
}