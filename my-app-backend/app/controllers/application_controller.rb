class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end

  get '/teams' do
    teams = Team.all
    teams.to_json(include: [:players])
  end

  # post '/teams' do
  #   message = Message.create(
  #     body: params[:body],
  #     username: params[:username]
  #   )
  #   message.to_json
  # end

  # patch '/teams/:id' do
  #   message = Message.find(params[:id])
  #   message.update(
  #     body: params[:body],
  #     username: params[:username]
  #   )
  #   message.to_json
  # end

  # delete '/teams/:id' do
  #   message = Message.find(params[:id])
  #   message.destroy
  #   message.to_json
  # end

end
