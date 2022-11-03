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

  post '/teams' do
    teams = Team.new(params)

    if teams.save
      teams.to_json(include: [:players])
    else
      { errors: teams.errors.full_messages }.to_json
    end
    
  end

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
