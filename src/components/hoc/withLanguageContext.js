import React from 'react';
import LanguageContext from '../../context/LanguageContext.js'

const withLanguageContext = WrappedComponent => {
  return function withLanguageContext(props) {

    return (
      <LanguageContext.Consumer>
        {language => <WrappedComponent {...props} language={language} />}
      </LanguageContext.Consumer>
    );
  };
};

export default withLanguageContext;