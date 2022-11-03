class Team < ActiveRecord::Migration[6.1]
  def change
    create_table :teams do |t|
      t.string :name
      t.string :location
      t.string :league
    end
  end
end
