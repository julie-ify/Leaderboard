export const postData = async (url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; Charset=UTF-8',
    },
  })

  return response;
}

export const getData = async (url) => {
  const response = await fetch(url)
  return response;
}