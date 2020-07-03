import React, { Component, createContext } from 'react';

import storage from '../utils/storage';

const { Provider, Consumer } = createContext();

export const themeConfig = {
  light: 'light',
  dark: 'dark',
};

export default class ThemeContext extends Component {
  static Consumer = Consumer;

  toggleTheme = () => {
    this.setState(({ isChecked, theme }) => ({
      isChecked: !isChecked,
      theme: theme === 'light' ? 'dark' : 'light',
    }));
  };


  state = {
    theme: themeConfig.light,
    isChecked: false,
    toggleTheme: this.toggleTheme,
  };


  componentDidMount() {
    const persistedTheme = storage.get("theme");

    if (persistedTheme) {
      this.setState({
        theme: persistedTheme,
        isChecked: persistedTheme === themeConfig.light ? false : true,
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { theme } = this.state;

    if (prevState.theme !== theme) {
      storage.save('theme', theme);
    }
  }


  render() {

    return <Provider value={{

      isChecked: this.state.isChecked,
      type: this.state.theme,
      toggleTheme: this.toggleTheme,
    }}
    >
      {this.props.children}
    </ Provider>;
  }
}