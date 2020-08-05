const ENDPOINT =
  'https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/';

const fetchCardData = (json) =>
  fetch(ENDPOINT, {
    method: 'POST',
    body: JSON.stringify(json),
    headers: {
      'content-type': 'application/json',
    },
  }).then((response) => response.json());

export default { fetchCardData };
