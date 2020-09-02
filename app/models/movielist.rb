class Movielist < ApplicationRecord
    has_many :movies

    def movie_count
        movies.length()
    end
end
