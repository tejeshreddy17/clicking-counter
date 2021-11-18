// Write your code here
import './index.css'

import {Component} from 'react'

class clickCounter extends Component {
  state = {count: 0}

  increaseCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="background-style">
        <h1 className="heading-element">
          The Button has been clicked
          <span className="span-element"> {count}</span> times.
        </h1>
        <p className="description-style">
          Click the button to increase the count
        </p>
        <button
          className="button-style"
          type="button"
          onClick={this.increaseCount}
        >
          Click Me !
        </button>
      </div>
    )
  }
}

export default clickCounter
