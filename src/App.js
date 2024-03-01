import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import LoadingSpinner from './components/UI/LoadingSpinner'

const NewQuote = React.lazy(() => import('./pages/NewQuote'))
const AllQuotes = React.lazy(() => import('./pages/AllQuotes'))
const NotFound = React.lazy(() => import('./pages/NotFound'))
const QuoteDetail = React.lazy(() => import('./pages/QuoteDetail'))

function App () {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className='centered'>
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>
          <Route path='/' element={<Navigate replace to='/quotes' />} />
          <Route path='/quotes' element={<AllQuotes />} />
          <Route path='/quotes/:quoteId/*' element={<QuoteDetail />} />
          <Route path='/new-quote' element={<NewQuote />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}

export default App
