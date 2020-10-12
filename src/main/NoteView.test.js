import React from "react";
import ReactDOM from "react-dom";
import NoteView from "./NoteView";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <NoteView />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
