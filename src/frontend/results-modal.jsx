import React from 'react';
import { Link } from "react";
import { hydrate } from 'react-dom';

class ResultsModal extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: true,
            car: "",
            transit: "",
            bike: 0,
            walk: 0,
        }
    
        this.handleClickforCancel = this.handleClickforCancel.bind(this);
    }

    handleClickforCancel() {
        this.props.toggleModal();
    }

    calculateCarbon(miles) {
        debugger
        let carNum = 404 * 2 * miles
        let transitNum = 204 * 2 * miles
        let bikeNum = 0 
        let walkNum = 0 

        this.setState({ 
            car: carNum,
            transit: transitNum,
            bike: bikeNum,
            walk: walkNum,
        })

    }


    render() {

        return (
    
        <div className="modal-container">
             <div className="x-icon">
              <button
                className="x-icon-style"
                onClick={this.handleClickforCancel}
              >
                X
              </button>

            </div>
            <div className="results-container">
                {/* {this.calculateCarbon()} */}

                    <div className="car-results">{this.state.car}</div>
                    
                    <div className="transit-results">{this.state.transit}</div>

                    <div className="walk-results">{this.state.walk}</div>

                    <div className="bike-results">{this.state.bike}</div>

            </div>
        </div>

        ) 
    }

}

export default ResultsModal;