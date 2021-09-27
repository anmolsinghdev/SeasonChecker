import React from 'react';
import './errorPage.scss';
const ErrorPage = (props) => {
  return (
    <div className="error-page">
      <h1>
        <i class="exclamation big circle icon"></i>
        {props.errorMessage}
      </h1>
    </div>
  );
};

export default ErrorPage;
