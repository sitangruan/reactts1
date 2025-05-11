/**
 * This is the central place for all the api calling methods.
 */

import { apiUrls } from "../common/urls";
import { sleepFor } from "../common/utillities";
import TodoElement from "../modals/TodoElement";

const forceWaitingTime = 200;

const apiCaller = {
  todos: {
    getTodos() {
      return fetch(apiUrls.todos).then(response => {
        sleepFor(forceWaitingTime); //Force to have a waiting time so the loading mask will appear to mimic a more realistic server call.
        return response.json();
      })
    },
    postTodo(item: TodoElement) {
      const toSave = {
        userId: item.UserId,
        title: item.Title,
        completed: item.Completed
      }
      return fetch(apiUrls.todos, {
        method: 'POST',
        body: JSON.stringify(toSave),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
      .then(response => {
        sleepFor(forceWaitingTime);
        const randomNumber = Math.floor(Math.random() * 10);
        if (randomNumber % 2 === 0) {
          //Force to throw an error with 50% chances so that the UI could demo an error message.
          throw(new Error("Server side error happened. Please try agin later!"));
        }

        return response.json();
      })
    },
  },
  users: {
    //To be implemented if needed.
  },
  posts: {
    //To be implemented if needed.
  },
  albums: {
    //To be implemented if needed.
  }
};

export default apiCaller;
