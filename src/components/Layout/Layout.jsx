import React from "react";
import PropTypes from "prop-types";

// context
import withThemeContext from '../../hoc/withThemeContext';

// styles
import styles from "./Layout.module.scss";

function Layout(props) {
  const { children, theme } = props;

  return (
    <div
      className={`${styles.container} ${
        theme.isChecked ? styles.dark : styles.light
        }`}
    >
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,

  theme: PropTypes.shape({
    type: PropTypes.string.isRequired,
    isChecked: PropTypes.bool.isRequired,
    toggleTheme: PropTypes.func.isRequired,
  }).isRequired,
};

export default withThemeContext(Layout);