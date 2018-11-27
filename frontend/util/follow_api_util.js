export const fetchAllFollows = () => (
  $.ajax({
    method: 'GET',
    url: 'api/follows'
  })
);


export const createFollow = follow => (
  $.ajax({
    method: 'POST',
    url: 'api/follows',
    data: { follow }
  })
);

export const destroyFollow = followId => (
  $.ajax({
    method: 'DELETE',
    url: `api/follows/${followId}`
  })
);
