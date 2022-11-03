class Player < ActiveRecord::Migration[6.1]
  def change
    create_table :players do |t|
      t.string :name
      t.string :position
      t.integer :games
      t.float :innings
      t.float :era
      t.integer :win
      t.integer :loss
      t.float :batting_average
      t.float :hr
      t.float :rbi
      t.float :jersey_number
      t.integer :team_id
    end
  end
end
