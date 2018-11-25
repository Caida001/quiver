class Api::VideosController < ApplicationController
  def index
    @videos = get_videos_list(
      video_index_params[:limit],
      video_index_params[:offset]
    )
    render "api/videos/index"
  end

  def show
    @video = Video.find(params[:id])
    get_video_show
