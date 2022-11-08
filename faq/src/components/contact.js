import React from "react";
import RESPONSES from "./response";

class CONTACT extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            suggestion: '',
            responses: []
        };
    };
    _submit = () => {
        if(this.state.email === '' & this.state.suggestion === ''){
            alert("Plesase fill the data")
        } 
        else {
            let responses_val = { "email": this.state.email, "suggestion": this.state.suggestion };
            this.state.responses.push(responses_val);
            console.log(this.state.responses);
            this.setState({ email: '', suggestion: '' });
        }
    };
    render() {
        return (
            <div className="contact-section">
                <div className="container mt-4">
                    <h1 className='mb-2'>Contact</h1>
                    <div className="contact-form p-4 border border-black rounded-3">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">User Name</label>
                            <input onChange={e => this.setState({ email: e.target.value })} value={this.state.email} type="email" className="form-control" id="exampleFormControlInput1" placeholder="Eg : omkar_rh" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Suggestion</label>
                            <textarea onChange={e => this.setState({ suggestion: e.target.value })} value={this.state.suggestion} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button onClick={this._submit} type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
                <div className="container mt-5 mb-5">
                    <RESPONSES data = {this.state.responses}/>
                </div>
            </div>
        );
    }
}

export default CONTACT;