import React from 'react';
import { Link } from "react";
import { hydrate } from 'react-dom';

class ResultsModal extends React.Component {

    constructor(props) {
        super(props)
    
        this.handleClickforCancel = this.handleClickforCancel.bind(this);
        this.funFacts = this.funFacts.bind(this);
    }

    handleClickforCancel() {
        let modal = document.getElementsByClassName("modal-outer-container")
        for(let i = 0; i < modal.length; i++){
                modal[i].style.display = 'none'
            } 
    }

    daysIntoYear(date){
        return (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
    }

    funFacts(){
        let {carNum, transitNum} = this.props;
        let d = new Date();
        let day = this.daysIntoYear(d);
        let carSitch = (carNum * day)/1000000;
        let transitSitch = (transitNum * day)/1000000;
        let lolDoBetter;

        if(carSitch && transitSitch < 5){
            return(
                <p>
                    great job staying local!
                </p>
            )
        }else if(carSitch && transitSitch < 10){
            return(
                <p>
                    wow! better than I expected from you!
                </p>
            )
        }else if(carSitch && transitSitch < 15){
            return(
                <p>
                    you can do better
                </p>
            )
        }else if(carSitch && transitSitch < 20){
            return(
                <p>
                    yo stop
                </p>
            )
        }else if(carSitch && transitSitch < 25){
            return(
                <p>
                    bro please
                </p>
            )
        }else if(carSitch && transitSitch > 25){
            return(
                <p>
                    what would Obama say
                </p>
            )
        }
        debugger
        
        return(
            <div className='fun-facts'>
                The average person emits 27 tons of carbon dioxide a year. 
                <br></br>
                <br></br>
                If you followed this path every day, you would emit {carSitch} tons just by driving this route, 
                <br></br>
                or 
                <br>
                </br>
                {transitSitch} tons just by taking public transit!

                <br>
                </br>

                {/* {lolDoBetter} */}

            </div>
        )

    }

    render() {

        let {carNum, transitNum} = this.props;
        let d = new Date();
        let day = this.daysIntoYear(d);
        let carEmit = carNum * day;
        let transitEmit = transitNum * day;
        return (
            <div className="modal-outer-container">
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
                <div className="results-subheader">results</div>
                    <div className="outer-results">Driving:
                        <div className="car-results">{this.props.carNum}</div>
                        <div className="carbon-dioxide">grams of CO</div>
                    </div>

                    <div className="outer-results">Transit:
                        <div className="transit-results">{this.props.transitNum}</div>
                        <div className="carbon-dioxide">grams of CO₂</div>
                    </div>

                    <div className="outer-results">Walking:
                        <div className="walk-results">{this.props.walkNum}</div>
                        <div className="carbon-dioxide">grams of CO₂</div>
                    </div>

                    <div className="outer-results">Biking:
                        <div className="bike-results">{this.props.bikeNum}</div>
                        <div className="carbon-dioxide">grams of CO₂</div>
                    </div>

                    <div className='your-sins'>
                        If you made this trip every day, you would have emitted
                        <br></br> 
                        <br></br> 
                        {carEmit} grams of CO₂ since January 1st by driving!
                        <br></br>
                        -or-
                        <br></br>
                        {transitEmit} grams of CO₂ since January 1st by taking public transit!

                    </div>
                    <br></br>

                {this.funFacts()}

              </div>
          </div>
       </div>
        )
    }

}

export default ResultsModal;