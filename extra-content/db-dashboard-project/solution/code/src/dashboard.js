import React from "react";
import { QueueContext } from "./q/context.js";

export default props => {
  return (
    <QueueContext.Consumer>
      {context => {
        console.log({ context });
        return (
          <>
            <h2>Database Actions</h2>
            <ul>
              {context.queue.map((action, i) => (
                <li key={i}>
                  {action.action} - {action.collection} - {action.id}
                </li>
              ))}
            </ul>
          </>
        );
      }}
    </QueueContext.Consumer>
  );
};
