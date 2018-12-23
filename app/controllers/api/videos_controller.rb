class Api::VideosController < ApplicationController

  def show
    @video = Video.find(params[:id])
    get_video_show
