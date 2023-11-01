import React from "react";
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
  const { feedbackItems } = props;

  return (
    <ul>
      {feedbackItems.map((item) => (
        <li key={item.id}>{item.feedback}</li>
      ))}
    </ul>
  );
}
