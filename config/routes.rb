Rails.application.routes.draw do
  get 'categories/new'
  resources :categories, only:[:new]
end
