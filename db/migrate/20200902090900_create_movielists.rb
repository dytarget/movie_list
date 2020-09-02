class CreateMovielists < ActiveRecord::Migration[6.0]
  def change
    create_table :movielists do |t|
      t.string :name

      t.timestamps
    end
  end
end
