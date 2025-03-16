import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          This page does not exist
        </h1>
        <p className="text-gray-600 mb-6">
          It seems like the page you are looking for is not available.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-200"
        >
          Go to the Main page
        </Link>
      </div>
    </section>
  )
}

export default NotFound
