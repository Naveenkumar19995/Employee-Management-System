import React, { Component } from 'react'

export default class HeaderComponent extends Component {
    constructor(props){
        super(props)
        this.state ={
            
        }
    }
  render() {
    return (
      <div>
         <header className = "header">
                    <nav>
                    <div><a href="" className="navbar-brand">Full Stack Employee Management Application</a></div>
                    </nav>
                </header>
      </div>
    )
  }
}
