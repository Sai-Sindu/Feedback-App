import {Component} from 'react'
import Feedback from './components/Feedback'

import './App.css'

const resources = {
  emojis: [
    {
      id: 0,
      name: 'Sad',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/sad-emoji-img.png',
    },
    {
      id: 1,
      name: 'None',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/none-emoji-img.png',
    },
    {
      id: 2,
      name: 'Happy',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/happy-emoji-img.png',
    },
  ],
  loveEmojiUrl: 'https://assets.ccbp.in/frontend/react-js/love-emoji-img.png',
}

class App extends Component {
  state = {optionClicked: false}

  onFeedback = id => {
    console.log(id)
    this.setState({optionClicked: true})
  }

  render() {
    const {optionClicked} = this.state
    return (
      <div className="bg-container">
        <div className="feedback-card">
          {optionClicked ? (
            <div className="card">
              <img
                src={resources.loveEmojiUrl}
                alt="love emoji"
                className="love-emoji"
              />
              <h1 className="heading">Thank You!</h1>
              <p className="response">
                We will use your feed back to improve our customer support
                performance
              </p>
            </div>
          ) : (
            <div className="card">
              <h1 className="heading">
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="feedback-options">
                {resources.emojis.map(eachEmoji => (
                  <Feedback
                    feedbackDetails={eachEmoji}
                    key={eachEmoji.id}
                    onFeedback={this.onFeedback}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
