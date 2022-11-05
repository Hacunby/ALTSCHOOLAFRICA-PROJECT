import React, { Component } from 'react'

export class Errorboundary extends Component {
    constructor(props){
        super(props);
        this.state = {
            error:null,
            errorInfo:null
        }
    }

    componentDidCatch(error, errorInfo){
        this.setState({
            error:error,
            errorInfo:errorInfo
        })

    }
  render() {
    if(this.state.errorInfo){
        return(
            <div>
                <h1>Sorry baby, something went wrong!</h1>
                <p>{this.state.error && this.state.errorInfo.toString()}</p>
                
            </div>
        )
    }
    return this.props.children
  }
}

export default Errorboundary
