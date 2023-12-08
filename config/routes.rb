Rails.application.routes.draw do
  get 'categories/new'
  resources :categories, only:[:new]
  get "/category/:id", to: "categories#search"
end
