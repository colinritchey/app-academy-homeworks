class BooksController < ApplicationController
  def index
    # your code here
    @books = Book.all
  end

  def new
    # your code here

  end

  def create
    # your code here
    @book = Book.new(book_params)

    if @book.save
      redirect_to '/books/'
    end
  end

  def destroy
    # your code here
    book_to_destroy = Book.find_by(id: params[:id])

    if book_to_destroy.destroy
      redirect_to '/books/'
    end
  end

  private
  def book_params
    params.require(:book).permit(:title, :author)
  end
end
