// // import { connect } from "react-redux";
// // import { Navigate, useNavigate, useParams } from "react-router-dom";
// // import { useState, useEffect } from "react";
// // import { handleAddAnswer } from "../actions/questions";
// // import "../styles/Poll.css";

// // const Poll = ({ dispatch, authedUser, question, author }) => {
// //   const navigate = useNavigate();
// //   const { id } = useParams();

// //   if (!question || !authedUser || !author) {
// //     return <Navigate to="/404" />;
// //   }

// //   const hasVotedForOptionOne = question.optionOne.votes.includes(authedUser);
// //   const hasVotedForOptionTwo = question.optionTwo.votes.includes(authedUser);
// //   const hasVoted = hasVotedForOptionOne || hasVotedForOptionTwo;

// //   const [submissionMessage, setSubmissionMessage] = useState("");

// //   const handleOptionOne = (e) => {
// //     e.preventDefault();
// //     dispatch(handleAddAnswer(question.id, "optionOne"));
// //     setSubmissionMessage("Your vote has been submitted!");
// //   };

// //   const handleOptionTwo = (e) => {
// //     e.preventDefault();
// //     dispatch(handleAddAnswer(question.id, "optionTwo"));
// //     setSubmissionMessage("Your vote has been submitted!");
// //   };

// //   const calcPercentage = (option, question) => {
// //     const numberVotesTotal =
// //       question.optionOne.votes.length + question.optionTwo.votes.length;
// //     return option === "optionOne"
// //       ? (question.optionOne.votes.length / numberVotesTotal) * 100 + " %"
// //       : (question.optionTwo.votes.length / numberVotesTotal) * 100 + " %";
// //   };

// //   // Ternary operator logic to check if the question is answered
// //   const pollStatus = hasVoted ? "Answered question" : "Unanswered question";

// //   useEffect(() => {
// //     // If a vote has been cast, refresh the question data
// //     if (submissionMessage) {
// //       // Fetch updated question state here or re-render to show updated poll results
// //       // Optionally, refetch questions from the store to show the updated vote count
// //     }
// //   }, [submissionMessage]);

// //   return (
// //     <div>
// //       <h1 className="text-3xl font-bold mt-9">Poll by {author.id}</h1>

// //       <div className="flex justify-center">
// //         <img src={author.avatarURL} alt="Profile" className="h-24 w-24" />
// //       </div>

// //       <div className="flex justify-center">
// //         <h2 className="text-2xl font-bold mt-6">Would you rather?</h2>
// //       </div>

// //       <div className="flex justify-center">
// //         <h3 className="text-xl mt-3">{pollStatus}</h3>
// //       </div>

// //       {submissionMessage && (
// //         <div className="text-green-600 font-bold mt-4">{submissionMessage}</div>
// //       )}

// //       <div className="grid grid-cols-2 gap-4 mt-4">
// //         <button
// //           onClick={handleOptionOne}
// //           disabled={hasVoted}
// //           className={
// //             "p-2 rounded-xl bg-zinc-100 hover:shadow-xl transition " +
// //             (hasVotedForOptionOne ? "bg-lime-400" : "")
// //           }
// //         >
// //           <div className={hasVotedForOptionOne ? "chosen" : ""}>
// //             <p className="font-bold mb-2">{question.optionOne.text}</p>
// //             {!hasVoted && (
// //               <p className="underline underline-offset-4 mb-3">Click</p>
// //             )}
// //             {hasVoted && (
// //               <p className="text-xs">
// //                 Votes: {question.optionOne.votes.length} (
// //                 {calcPercentage("optionOne", question)})
// //               </p>
// //             )}
// //           </div>
// //         </button>

// //         <button
// //           onClick={handleOptionTwo}
// //           disabled={hasVoted}
// //           className={
// //             "p-2 rounded-xl bg-zinc-100 hover:shadow-xl transition " +
// //             (hasVotedForOptionTwo ? "bg-lime-400" : "")
// //           }
// //         >
// //           <p className="font-bold mb-2">{question.optionTwo.text}</p>
// //           {!hasVoted && (
// //             <p className="underline underline-offset-4 mb-3">Click</p>
// //           )}
// //           {hasVoted && (
// //             <p className="text-xs">
// //               Votes: {question.optionTwo.votes.length} (
// //               {calcPercentage("optionTwo", question)})
// //             </p>
// //           )}
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // const mapStateToProps = ({ authedUser, users, questions }) => {
// //   const { id } = useParams();
// //   const question = questions[id];
// //   const author = question ? users[question.author] : null;
// //   return { authedUser, question, author };
// // };

// // export default connect(mapStateToProps)(Poll);

// import { connect } from "react-redux";
// import { Navigate, useNavigate, useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { handleAddAnswer } from "../actions/questions";
// import "../styles/Poll.css";

// const Poll = ({ dispatch, authedUser, question, author }) => {
//   const navigate = useNavigate();
//   const { id } = useParams();

//   if (!question || !authedUser || !author) {
//     return <Navigate to="/404" />;
//   }

//   const hasVotedForOptionOne = question.optionOne.votes.includes(authedUser);
//   const hasVotedForOptionTwo = question.optionTwo.votes.includes(authedUser);
//   const hasVoted = hasVotedForOptionOne || hasVotedForOptionTwo;

//   const [submissionMessage, setSubmissionMessage] = useState("");

//   const handleOptionOne = (e) => {
//     e.preventDefault();
//     dispatch(handleAddAnswer(question.id, "optionOne"));
//     setSubmissionMessage("Your vote has been submitted!");
//   };

//   const handleOptionTwo = (e) => {
//     e.preventDefault();
//     dispatch(handleAddAnswer(question.id, "optionTwo"));
//     setSubmissionMessage("Your vote has been submitted!");
//   };

//   const calcPercentage = (option, question) => {
//     const numberVotesTotal =
//       question.optionOne.votes.length + question.optionTwo.votes.length;
//     return option === "optionOne"
//       ? (question.optionOne.votes.length / numberVotesTotal) * 100 + " %"
//       : (question.optionTwo.votes.length / numberVotesTotal) * 100 + " %";
//   };

//   // Ternary operator logic to check if the question is answered
//   const pollStatus = hasVoted ? "Answered question" : "Unanswered question";

//   useEffect(() => {
//     // This will trigger a re-render after voting to display the updated vote counts
//     if (submissionMessage) {
//       // Fetch updated question data here if needed or trigger a re-render
//       // This assumes the state management is handling the re-render via Redux
//     }
//   }, [submissionMessage]);

//   const totalVotes =
//     question.optionOne.votes.length + question.optionTwo.votes.length;

//   return (
//     <div>
//       <h1 className="text-3xl font-bold mt-9">Poll by {author.id}</h1>

//       <div className="flex justify-center">
//         <img src={author.avatarURL} alt="Profile" className="h-24 w-24" />
//       </div>

//       <div className="flex justify-center">
//         <h2 className="text-2xl font-bold mt-6">Would you rather?</h2>
//       </div>

//       <div className="flex justify-center">
//         <h3 className="text-xl mt-3">{pollStatus}</h3>
//       </div>

//       {submissionMessage && (
//         <div className="text-green-600 font-bold mt-4">{submissionMessage}</div>
//       )}

//       <div className="grid grid-cols-2 gap-4 mt-4">
//         <button
//           onClick={handleOptionOne}
//           disabled={hasVoted}
//           className={
//             "p-2 rounded-xl bg-zinc-100 hover:shadow-xl transition " +
//             (hasVotedForOptionOne ? "bg-lime-400" : "")
//           }
//         >
//           <div className={hasVotedForOptionOne ? "chosen" : ""}>
//             <p className="font-bold mb-2">{question.optionOne.text}</p>
//             {!hasVoted && (
//               <p className="underline underline-offset-4 mb-3">Click</p>
//             )}
//             {hasVoted && (
//               <p className="text-xs">
//                 Votes: {question.optionOne.votes.length} (
//                 {calcPercentage("optionOne", question)})
//               </p>
//             )}
//           </div>
//         </button>

//         <button
//           onClick={handleOptionTwo}
//           disabled={hasVoted}
//           className={
//             "p-2 rounded-xl bg-zinc-100 hover:shadow-xl transition " +
//             (hasVotedForOptionTwo ? "bg-lime-400" : "")
//           }
//         >
//           <p className="font-bold mb-2">{question.optionTwo.text}</p>
//           {!hasVoted && (
//             <p className="underline underline-offset-4 mb-3">Click</p>
//           )}
//           {hasVoted && (
//             <p className="text-xs">
//               Votes: {question.optionTwo.votes.length} (
//               {calcPercentage("optionTwo", question)})
//             </p>
//           )}
//         </button>
//       </div>

//       {/* Show total votes */}
//       {hasVoted && (
//         <div className="text-center mt-4">
//           <p className="font-bold">Total Votes: {totalVotes}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// const mapStateToProps = ({ authedUser, users, questions }) => {
//   const { id } = useParams();
//   const question = questions[id];
//   const author = question ? users[question.author] : null;
//   return { authedUser, question, author };
// };

// export default connect(mapStateToProps)(Poll);

import React from "react";
import { connect } from "react-redux";
import { handleAddAnswer } from "../actions/questions";
import { useParams } from "react-router-dom";

const Poll = ({ question, authedUser, dispatch }) => {
  const { id } = useParams(); 

  if (!question) {
    return (
      <div className="text-center p-4">
        <p className="text-lg font-semibold text-teal-900">
          This poll does not exist. Please check the poll link or try again
          later.
        </p>
      </div>
    );
  }

  const hasAnswered =
    question.optionOne.votes.includes(authedUser) ||
    question.optionTwo.votes.includes(authedUser);

  const handleVote = (answer) => {
    if (!hasAnswered) {
      dispatch(handleAddAnswer(question.id, answer));
    }
  };

  const optionOneVotes = question.optionOne.votes.length;
  const optionTwoVotes = question.optionTwo.votes.length;
  const totalVotes = optionOneVotes + optionTwoVotes;

  const optionOnePercentage = totalVotes
    ? ((optionOneVotes / totalVotes) * 100).toFixed(2)
    : 0;
  const optionTwoPercentage = totalVotes
    ? ((optionTwoVotes / totalVotes) * 100).toFixed(2)
    : 0;

  return (
    <div className="max-w-xl mx-auto p-4">
      <h3 className="text-2xl font-bold mb-4 text-center text-teal-900">
        Poll by {question.author}
      </h3>
      <div className="bg-red-50 p-4 rounded-lg shadow-md mb-4 text-center text-teal-900">
        <h4 className="text-lg font-semibold">{question.optionOne.text}</h4>
        <button
          onClick={() => handleVote("optionOne")}
          disabled={hasAnswered}
          className={`mt-2 px-4 py-2 rounded-lg font-semibold transition duration-200 ${
            hasAnswered
              ? "bg-teal-300 cursor-not-allowed"
              : "bg-teal-500 hover:bg-teal-600 text-white"
          }`}
        >
          Vote Option One
        </button>
        {hasAnswered && (
          <p className="mt-2">
            {optionOneVotes} out of {totalVotes} votes ({optionOnePercentage}%)
          </p>
        )}
      </div>
      <div className="bg-red-50 p-4 rounded-lg shadow-md text-center text-teal-900">
        <h4 className="text-lg font-semibold">{question.optionTwo.text}</h4>
        <button
          onClick={() => handleVote("optionTwo")}
          disabled={hasAnswered}
          className={`mt-2 px-4 py-2 rounded-lg font-semibold transition duration-200 ${
            hasAnswered
              ? "bg-teal-300 cursor-not-allowed"
              : "bg-teal-500 hover:bg-teal-600 text-white"
          }`}
        >
          Vote Option Two
        </button>
        {hasAnswered && (
          <p className="mt-2">
            {optionTwoVotes} out of {totalVotes} votes ({optionTwoPercentage}%)
          </p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions }) => {
  const { id } = useParams(); // Get id from URL params
  const question = questions[id]; // Fetch the question from the store

  return {
    authedUser,
    question,
  };
};

export default connect(mapStateToProps)(Poll);
