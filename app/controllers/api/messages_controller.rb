class Api::MessagesController < ApplicationController
  before_action :require_signed_in!

  def create
    @message = Message.new(message_params)

    if @message.save!
      chatroom = Chatroom.find(params[:chatroom_id])

      MessagesChannel.broadcast_to chatroom, message:
        {
          id: @message.id,
          body: @message.body,
          username: @message.chatroom_user.username,
          channel_id: @message.chatroom.channel.id
        }

      render "api/messages/show"
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def show
    @message = Message.find(params[:id])
  end

  private

  def message_params
    params.require(:message).permit(:chatroom_id, :chatroom_user_id, :body)
  end
end
