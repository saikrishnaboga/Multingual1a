import {Component} from 'react'
import Multilingual from './Multilingual'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    uiImageUrl: languageGreetingsList[0].imageUrl,
    uiImageAltText: languageGreetingsList[0].imageAltText,
  }

  statusOfLanguage = id => {
    const updatedObj = languageGreetingsList.find(
      eachItem => eachItem.id === id,
    )
    this.setState({
      uiImageUrl: updatedObj.imageUrl,
      uiImageAltText: updatedObj.imageAltText,
    })
  }

  render() {
    const {uiImageAltText, uiImageUrl} = this.state

    return (
      <div>
        <h1>Multilingual Greetings</h1>
        <ul>
          {languageGreetingsList.map(eachButton => (
            <Multilingual
              buttonDetails={eachButton}
              statusOfLanguage={this.statusOfLanguage}
              key={eachButton.id}
            />
          ))}
        </ul>
        <img src={uiImageUrl} alt={uiImageAltText} />
        <p>{uiImageAltText}</p>
      </div>
    )
  }
}

export default App
