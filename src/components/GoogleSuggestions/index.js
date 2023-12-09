import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchText: ''}

  updateText = value => {
    this.setState({searchText: value})
  }

  onChangeText = event => {
    this.setState({searchText: event.target.value})
  }

  render() {
    const {searchText} = this.state
    const {suggestionList} = this.props
    const filteredList = suggestionList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchText.toLowerCase()),
    )
    return (
      <div className="app-container">
        <div className="google-suggestions-container">
          <img
            className="google-logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="googleMainText"
          />
          <div className="search-input-suggestions-container">
            <img
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
              alt="searchIcon"
            />
            <input
              type="search"
              className="search-input"
              onChange={this.onChangeText}
              value={searchText}
              placeholder="Search Google"
            />
            <ul className="suggestions-list">
              {filteredList.map(eachSuggestion => (
                <SuggestionItem
                  key={eachSuggestion.id}
                  updateText={this.updateText}
                  eachSuggestion={eachSuggestion}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
