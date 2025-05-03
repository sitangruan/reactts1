/**
 * This is the Post reducer
 */

import { PostActionType } from "../common/constants";
import PostAction from "../modals/PostAction";
import PostElement from "../modals/PostElement";

const postReducer = (state = Array<PostElement>(), action: PostAction | undefined): Array<PostElement> => {
  if (!action) {
    return state == undefined ? Array<PostElement>() : state;
  } 

  switch (action.Type) {
    case PostActionType.LOAD:
      if (Array.isArray(action.Data)) {
        return [...action.Data];
      } else {
        return [action.Data];
      }
    case PostActionType.ADD:
      return [
        ...state,
        Array.isArray(action.Data) ? action.Data[0] : action.Data
      ];
    default:
      return state == undefined ? Array<PostElement>() : state;
  }
}

export default postReducer;
