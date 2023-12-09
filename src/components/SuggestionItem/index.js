import './index.css'

const SuggestionItem = props => {
  const {eachSuggestion, updateText} = props
  const {id, suggestion} = eachSuggestion

  const suggestionText = () => {
    updateText(id, suggestion)
  }

  return (
    <li className="">
      <p className="">{suggestion}</p>
      <button type="button" onClick={suggestionText}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className=""
          alt="arrowIcon"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
