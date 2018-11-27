class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      signin(@user)
      render 'api/users/show'
    else
      render json: ["invalid username/password combo"], status: 401
    end
  end

  def destroy
    @user = current_user
    if logged_in?
      signout
      render "api/users/show"
    else
      render json: ["nobody signed in"], status: 404
    end
  end
end
