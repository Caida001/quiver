class Api::FeaturedChannelsController < ApplicationController
  def index
    @channels = Channel.featured_channels.limit(10)
  end

end 
