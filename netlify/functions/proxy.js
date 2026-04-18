exports.handler = async (event) => {
  const url = 'https://script.google.com/macros/s/AKfycbya6qqwJpSlLGOVrW79DshVLFF6_gXx5rykpdqUYyraOjCUFOwbCrQ1jJ5S-6vvk_4e/exec';
  const fetch = require('node-fetch');
  const res = await fetch(
    event.httpMethod === 'POST'
      ? url
      : url + '?action=getAll',
    {
      method: event.httpMethod,
      body: event.body,
      headers: {'Content-Type':'application/json'}
    }
  );
  const data = await res.text();
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    },
    body: data
  };
};
