import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Здесь можно выполнить логирование ошибки или отправить ее на сервер
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      return <div>Что-то пошло не так. Пожалуйста, обновите страницу.</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
