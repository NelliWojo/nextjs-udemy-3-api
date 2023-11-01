import { buildFeedbackPath, extractFeedback } from "@/utils/feedback";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, feedback } = req.body;

    const newFeedback = { id: new Date().toISOString(), email, feedback };

    // store that in database or in a file
    const filePath = buildFeedbackPath();
    /*  const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData); */
    extractFeedback(filePath);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "Success!", feedback: newFeedback });
  } else {
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    res.status(200).json({ feedback: data });
  }
}
