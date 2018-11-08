class Api::MessagesController < ApplicationController
  before_action :ensure_session_token!
  before_action :set_chatroom

  def index
    @messages = Message.all
    render :index
  end

  def create
    @message = Message.new(message_params)
    @message.chatroom_user = current_user.chatroom_users.where(user_id: @message.chatroom_user_id)
    if @message.save
      render :show
    else
      render json: ['invalid message'], status: 401
    end
  end

  def show
    @message = Message.find(params[:id])
  end

  def destroy
    @message = Message.find(params[:id])
    if @message.chatroom_user_id == current_user.id
      @message.destroy
    else
      render json: ["please delete your own message"], status: 401
    end
  end

  def message_params
    params.require(:message).permit(:body, :chatroom_user_id, :chatroom_id)
  end
end 
