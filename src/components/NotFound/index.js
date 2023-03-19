// Write your code here
import Header from '../Header'
import './index.css'

const NotFound = () => (
  <>
    <Header />
    <div className="NotFound-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
        className="Not-found"
      />
      <h1>Lost Your way</h1>
      <p>
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </p>
    </div>
  </>
)

export default NotFound
