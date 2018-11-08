Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :videos, only: [:index, :show, :create, :update, :destroy]
    resources :chatrooms do
      resource :chatroom_users
      resources :messages
    end
    resources :subscriptions
  end
  mount ActionCable.server, at: '/cable'
  root to: 'static_page#root'
end
