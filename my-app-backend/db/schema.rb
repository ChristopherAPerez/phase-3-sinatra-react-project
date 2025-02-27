# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_11_02_205015) do

  create_table "players", force: :cascade do |t|
    t.string "name"
    t.string "position"
    t.integer "games"
    t.float "innings"
    t.float "era"
    t.integer "win"
    t.integer "loss"
    t.float "batting_average"
    t.float "hr"
    t.float "rbi"
    t.float "jersey_number"
    t.integer "team_id"
  end

  create_table "teams", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.string "league"
  end

end
