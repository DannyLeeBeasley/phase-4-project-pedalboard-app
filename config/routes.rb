Rails.application.routes.draw do
  
  resources :pedals, only: [:index, :show, :create]
  resources :pedalboard_pedals, only: [:index, :show, :create, :destroy]
  resources :pedalboards 
  resources :users, only: [:index, :show, :create]
  resources :sessions, only: [:index, :create]
  get '/logout', to: 'sessions#destroy'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
