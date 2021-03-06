import React, {Component} from 'react';
import axios from 'axios'

class ExpensesPage extends Component{
    constructor(props){
        super(props)
        this.state={
            date:'',
            amount:'',
            reason:''
        }
        this.inputChange=this.inputChange.bind(this)
    }

    inputChange(event){
        console.log(event.target.value)
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    onSubmit(event){
        // event.preventDefault()
        const submittedData = {
            date: this.state.date,
            amount: this.state.amount,
            reason: this.state.reason
        }
        axios.post('/api/submit', submittedData).then(res=>{
            console.log(res)
        })
    }

    render(){
        console.log(this.state)

        return(
            <div >
                <h1 className="display-4 text-center">Enter your expense</h1>
                <form action="/history" onSubmit={this.onSubmit.bind(this)} >
                <div className="form-group">
                        <label htmlFor="date">Date of expense</label>
                        <input value={this.state.date} onChange={this.inputChange} type="date" id="date" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="amount">Amount Payed</label>
                        <input onChange={this.inputChange} value={this.state.amount} type="text" id="amount" className="form-control" placeholder="Enter amount payed" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="reason">Reason</label>
                        <input onChange={this.inputChange} value={this.state.reason} type="text" id="reason" className="form-control" placeholder="Enter reason of expense" />
                    </div>
                    
                    <button className="btn btn-primary">Save expense</button>
                </form>


            </div>
        )
    }
}

export default ExpensesPage