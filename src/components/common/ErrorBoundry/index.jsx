import {PureComponent} from "react";

import Error from "../../../pages/error";

class ErrorBoundry extends PureComponent {
  state = {
    error: false,
  }

  componentDidCatch() {
    this.setState({error: true});
  }

  render() {
    if(this.state.error) {
      return <Error />;
    }

    return this.props.children;
  }
}

export default ErrorBoundry;