class BlogsController < ApplicationController
  def index
  	@articles = Article.all
  end
end
