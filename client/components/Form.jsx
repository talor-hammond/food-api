import React from 'react'

import api from '../apiClient'

class Form extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            nameOne: '',
            nameTwo: '',
            food: '',
            cuisine: '',
            winePairing: false,
            email: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.changeWinePairingBool = this.changeWinePairingBool.bind(this)
        this.getResults = this.getResults.bind(this)
    }


    handleChange(e) {
        const inputs = this.state
        inputs[e.target.name] = e.target.value
    }

    changeWinePairingBool() {
        this.state.winePairing = !this.state.winePairing
    }

    getResults(nameOne, nameTwo, food, cuisine, winePairing, email) {

        console.log(this.state)

    }

    submitButton(e) {

        console.log(this.state)

        e.preventDefault()

    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <form>

                        <h1>Who's going?</h1>
                        <div className="form-row">
                            <div className="col">
                                <input type="text" name="nameOne" className="form-control" onChange={(e) => this.handleChange(e)} />
                            </div>
                            <small className="form-text text-muted">&</small>
                            <div className="col">
                                <input type="text" name="nameTwo" className="form-control" onChange={(e) => this.handleChange(e)} />
                            </div>
                        </div>

                        <div className="form-group">
                            <h1>What do you feel like?</h1>
                            <label>Food:</label>
                            <input type="text" name="food" className="form-control" onChange={(e) => this.handleChange(e)} />
                            <small className="form-text text-muted">Pasta, curry, mulch, etc.</small>
                            <br />
                            <label>Cuisine:</label>
                            <input type="text" name="cuisine" className="form-control" onChange={(e) => this.handleChange(e)} />
                            <small className="form-text text-muted">Italian, thai, chinese, etc.</small>
                        </div>

                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" onClick={() => this.changeWinePairingBool()} data-size="normal" data-toggle="toggle" name="winePairing" />
                            <label>Wine pairing?</label>
                        </div>

                        <div className="form-group">
                            <label>An email address to send the menu & recipes to:</label>
                            <input type="email" className="form-control" onChange={(e) => this.handleChange(e)} name="email" />
                        </div>

                        <button type="submit" onClick={(e) => this.submitButton(e)} className="btn btn-primary">Submit</button>

                    </form>
                </div>
            </React.Fragment>
        )
    }

}

export default Form