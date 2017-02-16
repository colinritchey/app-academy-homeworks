class UserMailer < ApplicationMailer
  default from: 'from@example.com'

  def welcome_email(user)
    @user = user
    @url  = 'http://localhost:3000/cats'
    mail(to: 'from@example.com', from: 'everybody@appacademy.io',
          subject: 'Welcome to My Awesome Site')
  end
end
