class CategoriesController < ApplicationController
  def new
    @categories = Category.new
    @maincategories = Category.all.roder("id ASC").limit(13)
  end
end
