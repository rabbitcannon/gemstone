import React, { Component } from 'react'

interface IProps {
  children: any
}

class Index extends Component<IProps> {
  render() {
    return <>{this.props.children}</>
  }
}

export default Index
