// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  letterCount = event => {
    const val = event.target.value.length
    this.setState({count: val})
  }

  render() {
    const {count} = this.state
    return (
      <div className="letter-count-container">
        <div className="letter-count-card">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label className="label" htmlFor="letterCount">
            Enter the phrase
          </label>
          <br />
          <input
            placeholder="Enter the phrase"
            id="letterCount"
            type="search"
            className="input-box"
            onChange={this.letterCount}
          />
          <div className="count-container">
            <p>No.of letters: {count}</p>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="img"
        />
      </div>
    )
  }
}

export default LettersCalculator
