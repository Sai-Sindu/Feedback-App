// Write your React code here.
import './index.css'

const Feedback = props => {
  const {feedbackDetails, onFeedback} = props
  const {name, imageUrl, id} = feedbackDetails

  const giveFeedback = () => {
    onFeedback(id)
  }
  return (
    <li className="feedback-card">
      <img src={imageUrl} className="image" alt={name} onClick={giveFeedback} />
      <p className="name">{name}</p>
    </li>
  )
}

export default Feedback
