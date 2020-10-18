Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'items#index'
  get 'items/buy'
  resources :items, only: [:show, :new]
    resources :items do
      collection do
        get 'buy'
      end
    end
end
