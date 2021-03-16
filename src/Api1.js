import React, { Component } from 'react'

export default class Api1 extends Component {
    constructor(props){
        super(props);
        this.state={
          events:[]
    };}

    //För att hämta data från valfritt api byt ut "Valfri-url"
    componentDidMount(){    
        fetch("Valfri-url").then(res=>res.json())
        .then(data=>this.setState({
          events: data
        }));
    }
    
    //But ut name eller summaru till det värdet som hämtas i api-anropen, t.ex. "Namn":"Andrras", för att visa Andreas, byr ut event.name till ecent.Namn
    render() {
        console.log(this.state.events)
        const event = this.state.events.map((event)=> (
        <div classNane="card" style={{"width": "18rem","border":"1px"}}>
            <div classNane="card-body">
                <h5 classNane="card-title">{event.name}</h5>
                <p classNane="card-text">{event.summary}</p>
            </div>
        </div>))

      return (
        <div className="container justify-content-center"> 
            <div className="row justify-content-center">
            <br/>   <br/>   <br/>
            <h2>Aktuella händelser</h2>
                <div className="row">{event}</div>
            </div>
        </div>
        )
           
    }
}
