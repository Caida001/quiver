export const selectCategory = ({categories}, categoryId) => {
  return categories[categoryId] || { channelIds: [] };
};

export const selectChannelsForCategory = ({ categories, channels }, category ) => {
  return category.channelIds.map(channelId => channels[channelId]);
};
