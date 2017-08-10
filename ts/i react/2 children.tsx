import * as React from 'react';

class Animate extends React.Component<{
  children: () => React.ReactNode
}>{
  render() {
    return <div>{this.props.children()}</div>
  }
}
