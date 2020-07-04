import React, { Component } from 'react';

const withFetch = url => WrappedComponent => {
  return class WithFetch extends Component {
    state = {
      data: [],
      loading: false,
      error: null,
    };

    componentDidMount() {
      this.setState({ loading: true });

      fetch(url)
        .then(res => res.json())
        .then(data => this.setState({ data }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }

    render() {
      return <WrappedComponent {...this.props} {...this.state} />;
    }
  };
};

export default withFetch;
// Copy
// Теперь используем с любым компонентом, делая код самого компонента чище и убирая потребность в классе.

// App.js
// const App = props => {
//   return <h1>В моих пропсах будут data, loading и error</h1>;
// };

// export default withFetch('https://jsonplaceholder.typicode.com/todos')(App);