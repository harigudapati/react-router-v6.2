const FIREBASE_DOMAIN =
  'https://quote-http-1c8c4-default-rtdb.asia-southeast1.firebasedatabase.app'

export async function getAllQuotes() {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`)
  const data = await response.json()
  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch quotes')
  }

  const transformedQuotes = []

  for (const key in data) {
    const quoteObj = {
      id: key,
      ...data[key],
    }

    transformedQuotes.push(quoteObj)
  }

  return transformedQuotes
}

export async function getSingleQuote(quoteId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes/${quoteId}.json`)
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch quote.')
  }

  const loadedQuote = {
    id: quoteId,
    ...data,
  }

  return loadedQuote
}

export async function addQuote(quoteData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`, {
    method: 'POST',
    body: JSON.stringify(quoteData),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || 'Could not create quote')
  }
  return null
}

export async function addComment(requestedData) {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/comments/${requestedData.quoteId}.json`,
    {
      method: 'POST',
      body: JSON.stringify(requestedData.commentData),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || 'Could not add comments')
  }
  return { commentId: data.name }
}

export async function getAllComments(quoteId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/comments/${quoteId}.json`)
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || 'Could not get commets.')
  }

  const transformedComments = []

  for (const key in data) {
    const commentObj = {
      id: key,
      ...data[key],
    }
    transformedComments.push(commentObj)
  }
  return transformedComments
}
