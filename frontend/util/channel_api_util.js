export const fetchAllChannels = () => (
  $.ajax({
    method: 'GET',
    url: 'api/channels'
  })
);

export const fetchSingleChannel = channelId => (
  $.ajax({
    method: 'GET',
    url: `api/channels/${channelId}`
  })
);

export const fetchFeaturedChannels = () => (
  $.ajax({
    method: 'GET',
    url: 'api/featured_channels'
  })
);


export const updateChannel = channel => (
  $.ajax({
    method: 'PATCH',
    url: `api/channels/${channel.id}`,
    data: {channel}
  })
);
