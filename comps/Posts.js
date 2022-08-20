//import "./styles.css";

import React from "react";

export default function Posts({ title, content }) {
  return (
    <div className="col-sm-6">
      <div className="card bg-light mt-2 text-center shadow">
        <div className="card-header">{title}</div>
        <div className="card-body">
          <small className="card-text text-muted font-weight-lighter word-break">
            {content}
          </small>
        </div>
      </div>
    </div>
  );
}
