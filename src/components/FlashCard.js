import React, { Component } from 'react';
import MultiCard from './MultiCard';
import RegularCard from './RegularCard';
import RandomWeighted from './RandomWeighted';
import axios from 'axios';

class FlashCard extends Component {
  constructor() {
    super();
    this.apiHostRoot = `https://aws-services.robertbunch.dev/services`;
    this.state = {
      flipClass: '',
      questionData: '',
      ready: false,
    };
  }

  newCard = () => {
    //fetch a new card question
    let path;

    const cardStyle = this.props.cardStyle;
    switch (cardStyle) {
      case 'Random':
      case 'Regular':
        path = this.apiHostRoot + '/all';
        break;
      case 'Weighted':
        path = this.apiHostRoot + '/weighted';
        break;
      case 'Regular':
        path = this.apiHostRoot + '/multi';
        break;
      default:
        path = this.apiHostRoot + '/all';
        break;
    }
    axios.get(path).then((response) => {
      this.setState({
        questionData: response.data,
        ready: true,
      });
    });
  };

  componentDidMount() {
    // this.newCard();
  }

  flip = (e) => {
    let newFlip = this.state.flipClass === '' ? 'flip' : '';
    this.setState({
      flipClass: newFlip,
    });
  };

  render() {
    if (!this.state.ready) {
      this.newCard();
      return (
        <div className='spinner-wrapper'>
          <i className='fas fa-spinner fa-6x fa-spin'></i>
        </div>
      );
    }

    return (
      <div>
        <div className='row align items-cener card-holder'>
          <div
            onClick={this.flip}
            className={`col-sm-6 offset-sm-3 card mb-3 ${this.state.flipClass}`}
          >
            {/* <RandomWeighted /> */}
            <RegularCard questionData={this.state.questionData} />
            {/* <MultiCard /> */}
          </div>
        </div>
        <button onClick={this.newCard} className='btn btn-primary btn-lg'>
          Next Question
        </button>
      </div>
    );
  }
}

export default FlashCard;
