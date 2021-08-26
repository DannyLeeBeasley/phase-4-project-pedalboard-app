class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :authorize

    def authorize
      @current_user = User.find_by( id: sesseion[:user_id] )
      render json: { error: user.errors.full_messages }, status: :unauthorized
      unless @current_user
    end

end
