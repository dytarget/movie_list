Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :movielists, param: :id
      resources :movies
    end
  end

  get '*path', to: 'pages#index', via: :all
end
