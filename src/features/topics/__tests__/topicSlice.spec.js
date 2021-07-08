import { render, screen } from "@testing-library/react";
import { Reducer, Selector } from "redux-testkit";
import reducer, { addTopic, selectTopics } from "../topicsSlice";

const initialState = { topics: {} };

describe("topicsSlice", () => {
  it("returns the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("addTopics adds a new topic and initializes an empty quizId array if none provided", () => {
    const data = {
      id: "123456",
      name: "Science",
      icon: "url"
    };
    expect(reducer(initialState, addTopic(data))).toEqual({
      topics: {
        // prettier-ignore
        "123456": {
          id: "123456",
          name: "Science",
          icon: "url",
          quizIds: []
        }
      }
    });
  });

  it("selectTopics selects the nested topics object in initial state", () => {
    Selector(selectTopics()).expect().toReturn({ topic: {} });
  });
});
