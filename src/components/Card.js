// import { Link } from "react-router-dom";

// const Card = ({ question, author }) => {
//   return (
//     <Link to={`/questions/${question.id}`}>
//       <div className="m-3 p-2 rounded-xl shadow-md hover:shadow-xl transition bg-red-50 max-w-sm mx-auto flex items-center space-x-4 text-teal-900">
//         <div className="shrink-0">
//           <img className="h-12 w-12" src={author?.avatarURL} alt="Author" />
//         </div>
//         <div>
//           <div className="text-xl font-medium text-teal-600">
//             {question.author}
//           </div>
//           <p className="text-xs italic text-teal-700">
//             {new Date(question.timestamp).toDateString()}
//           </p>
//           <p className="underline underline-offset-4 text-teal-900">Show</p>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default Card;

import { Link } from "react-router-dom";

const Card = ({ question = {}, author = {} }) => {
  // Fallback values if question or author properties are missing
  const { id, author: questionAuthor, timestamp } = question;
  const { avatarURL = "defaultAvatar.png" } = author; // Replace with a default avatar URL

  return (
    <Link to={`/questions/${id}`}>
      <div className="m-3 p-2 rounded-xl shadow-md hover:shadow-xl transition bg-red-50 max-w-sm mx-auto flex items-center space-x-4 text-teal-900">
        <div className="shrink-0">
          <img
            className="h-12 w-12"
            src={avatarURL}
            alt={questionAuthor || "Author"}
          />
        </div>
        <div>
          <div className="text-xl font-medium text-teal-600">
            {questionAuthor || "Unknown Author"}
          </div>
          <p className="text-xs italic text-teal-700">
            {timestamp ? new Date(timestamp).toDateString() : "Unknown Date"}
          </p>
          <p className="underline underline-offset-4 text-teal-900">Show</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
