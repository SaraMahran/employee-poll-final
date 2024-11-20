import { connect } from "react-redux";
import "../styles/app.css";

const PageNotFound = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mt-9 text-pink-700 text-center">
        Error 404
      </h1>
      <h2 className="text-2xl font-bold mt-9 text-teal-950 text-center">
        Page not found
      </h2>
    </div>
  );
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(PageNotFound);
