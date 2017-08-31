class ApplicationController < ActionController::Base

  before_action :convert_ssl_header
  around_action :handle_refresh_token_error

  include ApplicationHelper
  helper_method :current_user

  def current_user
    session['_o365_user']
  end

  def set_o365_user(o365_user)
    session['_o365_user'] = o365_user
  end

  def token_service
    @token_service ||= TokenService.new
  end

  def set_session_expire_after(days)
    session.options[:expire_after] = 60 * 60 * 24 * days
  end

  def clear_session_expire_after
    session.options[:expire_after] = nil 
  end

  def handle_refresh_token_error
    begin
      yield
    rescue Exceptions::RefreshTokenError => exception
      redirect_to link_login_o365_required_path
    end
  end

  def azure_oauth2_logout_required
    session['azure_logout_required']
  end

  def azure_oauth2_logout_required=(value)
    session['azure_logout_required'] = value
  end

  def convert_ssl_header
    if request.headers['HTTP_X_ARR_SSL']
      request.headers['HTTP_X_FORWARDED_SCHEME'] = 'https'
    end
  end

end