import React from 'react';
import { getMergeSortAnimations } from '../sortingAlgorithms/sortingAlgorithms.js';
// import { getBubbleSortAnimations } from '../sortingAlgorithms/sortingAlgorithms.js';

import './SortingVisualizer.css';

const ANIMATION_SPEED_MS = 1;

const NUMBER_OF_ARRAY_BARS = 200;

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: []
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 500));
    }
    this.setState({ array });
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      setTimeout(() => {
        const [barOneIdx, newHeight] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        barOneStyle.height = `${newHeight}px`;
      }, i * ANIMATION_SPEED_MS);
    }
  }

  // bubbleSort() {
  //   const animations = getBubbleSortAnimations(this.state.array);
  //   for (let i = 0; i < animations.length; i++) {
  //     const arrayBars = document.getElementsByClassName('array-bar');
  //     setTimeout(() => {
  //       const [barOneIdx, newHeight] = animations[i];
  //       const barOneStyle = arrayBars[barOneIdx].style;
  //       barOneStyle.height = `${newHeight}px`;
  //     }, i * ANIMATION_SPEED_MS);
  //   }
  // }

  render() {
    const { array } = this.state;

    return (
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: 'brown',
              height: `${value}px`,
            }}></div>
        ))}
        <div className="text"> <h1>Sort algorithmn display</h1>
        </div>
        <div className="array-button">
          <button onClick={() => this.resetArray()}>Generate New Array</button>
          <button onClick={() => this.mergeSort()}>Merge Sort</button>
          {/* <button onClick={() => this.bubbleSort()}>Bubble Sort</button> */}
        </div>
      </div>
    );
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
