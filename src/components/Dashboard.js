// import { connect } from "react-redux";
// import Card from "./Card";

// const Dashboard = ({ authedUser, questions, users }) => {
//   const unanswered = (question) =>
//     !question.optionOne.votes.includes(authedUser) &&
//     !question.optionTwo.votes.includes(authedUser);

//   const answered = (question) =>
//     question.optionOne.votes.includes(authedUser) ||
//     question.optionTwo.votes.includes(authedUser);

//   if (!questions || !users) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <h1 className="text-3xl font-bold mt-9" data-testid="heading">
//         Dashboard
//       </h1>

//       <h2 className="text-2xl font-bold mt-6">New Questions</h2>
//       <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {questions.filter(unanswered).map((question) => (
//           <li key={question.id}>
//             <Card question={question} author={users[question.author]} />
//           </li>
//         ))}
//       </ul>

//       <h2 className="text-2xl font-bold mt-6">Answered Questions</h2>
//       <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {questions.filter(answered).map((question) => (
//           <li key={question.id}>
//             <Card question={question} author={users[question.author]} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const mapStateToProps = ({ authedUser, questions, users }) => ({
//   authedUser,
//   questions: Object.values(questions).sort((a, b) => b.timestamp - a.timestamp),
//   users,
// });

// export default connect(mapStateToProps)(Dashboard);

import { connect } from "react-redux";
import { useState } from "react";
import Card from "./Card";

const Dashboard = ({ authedUser, questions, users }) => {
  const [showAnswered, setShowAnswered] = useState(false);

  const unanswered = (question) =>
    !question.optionOne.votes.includes(authedUser) &&
    !question.optionTwo.votes.includes(authedUser);

  const answered = (question) =>
    question.optionOne.votes.includes(authedUser) ||
    question.optionTwo.votes.includes(authedUser);

  if (!questions || !users) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1
        className="text-3xl font-bold mt-9 text-teal-600"
        data-testid="heading"
      >
        Dashboard
      </h1>

      <div className="flex justify-center mt-6">
        <button
          className={`px-4 py-2 font-bold rounded-md ${
            !showAnswered ? "bg-teal-500 text-white" : "bg-red-50 text-teal-900"
          }`}
          onClick={() => setShowAnswered(false)}
        >
          Unanswered Questions
        </button>
        <button
          className={`ml-4 px-4 py-2 font-bold rounded-md ${
            showAnswered ? "bg-teal-500 text-white" : "bg-red-50 text-teal-900"
          }`}
          onClick={() => setShowAnswered(true)}
        >
          Answered Questions
        </button>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {showAnswered
          ? questions.filter(answered).map((question) => (
              <li key={question.id}>
                <Card question={question} author={users[question.author]} />
              </li>
            ))
          : questions.filter(unanswered).map((question) => (
              <li key={question.id}>
                <Card question={question} author={users[question.author]} />
              </li>
            ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions, users }) => ({
  authedUser,
  questions: Object.values(questions).sort((a, b) => b.timestamp - a.timestamp),
  users,
});

export default connect(mapStateToProps)(Dashboard);
