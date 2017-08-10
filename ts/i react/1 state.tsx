import * as React from 'react';

class Simple extends React.Component<{}, { count: number }>{
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  render() {
    return <button
      onClick={() => {
        this.setState({ count: this.state.count + 1 });
      }}>
      Clicked count: {this.state.count}
    </button>
  }
}

render(<Simple />);
