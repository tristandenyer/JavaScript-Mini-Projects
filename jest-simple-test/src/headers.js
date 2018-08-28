const getHeaders = {
  method: 'GET',
  headers: {
    'Authorization': '550e8400-e29b-41d4-a716-446655440000' // in place of a dynamic UUIDv4
  },
  url: 'https://medium.com/@boriscoder/the-hidden-power-of-jest-matchers-f3d86d8101b0' // in place of a dynamic URL
}

module.exports = getHeaders;
