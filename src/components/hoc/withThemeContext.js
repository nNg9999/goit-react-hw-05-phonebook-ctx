import React from 'react';
import ThemeContext from '../../context/ThemeContex.js'

// Эта функция принимает компонент...
const withThemeContext = WrappedComponent => {
  // ... возвращает другой компонент...
  return function withThemeContext(props) {
    // ... который рендерит обернутый в Consumer компонент,
    // передавая тему как проп.
    return (
      <ThemeContext.Consumer>
        {theme => <WrappedComponent {...props} theme={theme} />}
      </ThemeContext.Consumer>
    );
  };
};

export default withThemeContext;