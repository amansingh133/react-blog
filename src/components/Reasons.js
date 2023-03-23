import IndividualReason from "./IndividualReason";
import "./Reasons.css";

function Reasons() {
  let iconContent = [
    {
      icon: "bi bi-award",
      content: "Dolor nulla consectetur aute nulla.",
    },
    {
      icon: "bi bi-airplane",
      content: "Dolor nulla consectetur aute nulla.",
    },
    {
      icon: "bi bi-bag-check",
      content: "Dolor nulla consectetur aute nulla.",
    },
  ];
  let output = [];

  iconContent.forEach((element) => {
    output.push(
      <IndividualReason icon={element.icon} content={element.content} />
    );
  });

  return <section id="reasons">{output}</section>;
}

export default Reasons;
