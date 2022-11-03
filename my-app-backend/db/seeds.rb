puts "🌱 Seeding spices..."

# Seed your database here

ny_yankees = Team.create(
    name: "Yankess",
    location: "New York",
    league: "American League"
)

boston_red_sox = Team.create(
    name: "Red Sox",
    location: "Boston",
    league: "American League"
)

ny_mets = Team.create(
    name: "Mets",
    location: "New York",
    league: "National League"
)

la_angels = Team.create(
    name: "Angels",
    location: "Los Angeles",
    league: "American League"
)

la_dodgers = Team.create(
    name: "Dodgers",
    location: "Los Angeles",
    league: "National League"
)

detroit_tigers = Team.create(
    name: "Tigers",
    location: "Detroit",
    league: "American League"
)

sf_giants = Team.create(
    name: "Giants",
    location: "San Francisco",
    league: "National League"
)

texas_rangers = Team.create(
    name: "Rangers",
    location: "Texas",
    league: "American League"
)

a_judge = Player.create(
    name: "Aaron Judge",
    position: "Outfielder",
    games: 162,
    innings: nil,
    era: nil,
    win: nil,
    loss: nil,
    batting_average: 325,
    hr: 62,
    rbi: 120,
    jersey_number: 99,
    team_id: ny_yankees.id
)

d_price = Player.create(
    name: "David Price",
    position: "Pitcher",
    games: 30,
    innings: 140,
    era: 3.50,
    win: 10,
    loss: 12,
    batting_average: nil,
    hr: nil,
    rbi: nil,
    jersey_number: 33,
    team_id: boston_red_sox.id
)

r_cano = Player.create(
    name: "Robinson Cano",
    position: "Second Baseman",
    games: 114,
    innings: nil,
    era: nil,
    win: nil,
    loss: nil,
    batting_average: 302,
    hr: 22,
    rbi: 99,
    jersey_number: 22,
    team_id: ny_mets.id
)

m_trout = Player.create(
    name: "Mike Trout",
    position: "Outfielder",
    games: 135,
    innings: nil,
    era: nil,
    win: nil,
    loss: nil,
    batting_average: 290,
    hr: 32,
    rbi: 111,
    jersey_number: 27,
    team_id: la_angels.id
)

c_kershaw = Player.create(
    name: "Clayton Kershaw",
    position: "Pitcher",
    games: 30,
    innings: 66.2,
    era: 2.45,
    win: 14,
    loss: 9,
    batting_average: 223,
    hr: 1,
    rbi: 3,
    jersey_number: 22,
    team_id: la_dodgers.id
)

j_verlander = Player.create(
    name: "Justin Verlander",
    position: "Pitcher",
    games: 23,
    innings: 55.1,
    era: 3.04,
    win: 13,
    loss: 12,
    batting_average: nil,
    hr: nil,
    rbi: nil,
    jersey_number: 35,
    team_id: detroit_tigers.id
)

e_longoria = Player.create(
    name: "Evan Longoria",
    position: "Third Baseman",
    games: 145,
    innings: nil,
    era: nil,
    win: nil,
    loss: nil,
    batting_average: 333,
    hr: 12,
    rbi: 65,
    jersey_number: 10,
    team_id: sf_giants.id
)

m_young = Player.create(
    name: "Michael Young",
    position: "Shortstop",
    games: 123,
    innings: nil,
    era: nil,
    win: nil,
    loss: nil,
    batting_average: 294,
    hr: 18,
    rbi: 88,
    jersey_number: 10,
    team_id: texas_rangers.id
)

puts "✅ Done seeding!"
