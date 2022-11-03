class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end

  #<<<<<<<<<<<<< TEAM CRUD >>>>>>>>>>>>>>

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

  patch '/teams/:id' do
    teams = Team.find(params[:id])

    teams.update(
      name: params[:name],
      location: params[:location],
      league: params[:league]
    )

    teams.to_json(include: [:players])

  end

  delete '/teams/:id' do
    teams = Team.find(params[:id])

    teams.destroy

    teams.to_json

  end

  #<<<<<<<<<<<<< PLAYER CRUD >>>>>>>>>>>>>>

  get '/players' do
    players = Player.all
    players.to_json(include: [:team])

  end

  post '/players' do
    players = Player.new(params)

    if players.save
      players.to_json(include: [:team])
    else
      { errors: players.errors.full_messages }.to_json
    end

  end

  patch '/players/:id' do
    players = Player.find(params[:id])

    players.update(
      name: params[:name],
      position: params[:position],
      games: params[:games],
      innings: params[:innings],
      era: params[:era],
      win: params[:win],
      loss: params[:loss],
      batting_average: params[:batting_average],
      hr: params[:hr],
      rbi: params[:rbi],
      jersey_number: params[:jersey_number],
      team_id: params[:team_id]
    )

    teams.to_json(include: [:team])

  end

  delete '/players/:id' do
    players = Player.find(params[:id])

    players.destroy

    players.to_json(include: [:team])

  end

end
