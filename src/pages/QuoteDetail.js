import { Fragment, useEffect } from 'react'
import { Link, Routes, Route, useParams } from 'react-router-dom'
import Comments from '../components/comments/Comments'
import useHttp from '../components/hooks/use-http'
import { getSingleQuote } from '../components/lib/api'
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import LoadingSpinner from '../components/UI/LoadingSpinner'

const QuoteDetail = () => {
  const params = useParams()
  const {
    sendRequest,
    data: loadedQuote,
    error,
    status
  } = useHttp(getSingleQuote, true)
  const { quoteId } = params

  useEffect(() => {
    sendRequest(quoteId)
  }, [sendRequest, quoteId])

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    )
  }

  if (error) {
    return <p className='centered'>{error}</p>
  }

  if (!loadedQuote.text) {
    return <p>No quote found!</p>
  }
  return (
    <>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Routes>
        <Route
          path=''
          element={
            <div className='centered'>
              <Link className='btn--flat' to='comments'>
                Load Comments
              </Link>
            </div>
          }
        />
        <Route path='comments' element={<Comments />} />
      </Routes>
    </>
  )
}
export default QuoteDetail
