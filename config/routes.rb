Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :channels, only: [:index, :show, :update]
    resources :categories, only: [:index, :show]
    resources :searches, only: [:index]
    resources :follows, only: [:index, :create, :destroy]
    resources :chatrooms, only: :show do
      resources :messages, only: [:create, :show]
    end
  end
  mount ActionCable.server, at: '/cable'
  root to: 'static_pages#root'
end
