/**
 * Created by aswin on 27/03/17.
 */
import React, { Component } from 'react';
import {
    Redirect
} from 'react-router-dom';

class Main extends Component{
    constructor(){
        super();
        this.state = {
            newClicked : false
        }
    }
    newClicked=false;
    setNewClicked(){
        this.setState(
            {
                newClicked :true
            }
        );
    }
    render(){
        console.log(this.state.newClicked);
        if(this.state.newClicked){
            return(
                <Redirect to="/new" />
            );
        }
        return(
            <div>
                <button onClick={() => {this.setNewClicked()}}>
                    New
                </button>
            </div>
        );
    }
}
export default Main;