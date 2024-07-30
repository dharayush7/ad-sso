import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

export default function MessagePage() {
  return (
    <div
      className="d-flex justify-content-center flex-column align-items-center"
      id="container"
    >
      <h1 className="text fs-1" id="head">
        LogOut Successfull
      </h1>
      <a href="/callback?next=/">
        <button type="button" className="btn btn-success" id="btn">
          LogIn Again
        </button>
      </a>
    </div>
  );
}
