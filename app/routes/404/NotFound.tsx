import { Link } from 'react-router-dom'
import '~/styles/page404.scss'

const NotFound = () => {
  return (
    <section>
      <div className="container">
        <h1 className="title">This page does not exist</h1>
        <Link to="/" className="link-page">
          Main page
        </Link>
      </div>
    </section>
  )
}

export default NotFound
