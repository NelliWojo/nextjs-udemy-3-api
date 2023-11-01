import React, { Fragment, useState } from "react";
import { buildFeedbackPath, extractFeedback } from "../../utils/feedback";

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);

  return {
    props: {
      feedbackItems: data,
    },
  };
}

export default function FeedbackPage(props) {
  const [feedbackData, setFeedbackData] = useState();
  const { feedbackItems } = props;

  function showFeedbackHandler(id) {
    fetch(`/api/${id}`)
      .then((response) => response.json())
      .then((data) => setFeedbackData(data.feedback));
  }

  // bind --> allows to create a new function from an existing function
  return (
    <Fragment>
      {feedbackData && <p>{feedbackData.email}</p>}
      <ul>
        {feedbackItems.map((item) => (
          <li key={item.id}>
            {item.feedback}{" "}
            <button onClick={showFeedbackHandler.bind(null, item.id)}>
              Show Details
            </button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
