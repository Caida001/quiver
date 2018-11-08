class Api::ChatRoomsController < ApplicationController
  before_action :set_chatroom, only: [:show, :edit, :update, :destroy]

  def index
    @chatrooms = ChatRoom.all
  end

  def new
    @chatroom = ChatRoom.new
  end

  def show
    @messages = @chatroom.messages.order(created_at: :desc).limit(100).reverse
    @chatroom_users = current_user.chatroom_users
  end

  def create
    @chatroom = ChatRoom.new(chatroom_params)
    if @chatroom.save
      render :show
    else
      render json: ['invalid channel'], status: 401
    end
  end

  private

  def chatroom_params
    params.require(:chatroom).permit(:id, :title)
  end
end
