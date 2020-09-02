module Api
    module V1
        class MoviesController < ApplicationController
            protect_from_forgery with: :null_session

             def index
                movies = Movie.all

                render json: MovieSerializer.new(movies).serialized_json
            end

            def create
                movie = Movie.new(movie_params)

                if movie.save
                    render json: MovieSerializer.new(movie).serialized_json
                else
                    render json: { error: movie.error.message},status:422
                end
            end

            def update
                movie = Movie.find(params[:id])

                if movie.update(movie_params)
                    render json: MovieSerializer.new(movie).serialized_json
                else
                    render json: { error: movie.error.message},status:422
                end
            end

             def destroy
                movie = Movie.find(params[:id])

                if movie.destroy
                    head :no_content
                else
                    render json: { error: movie.error.message},status:422
                end
            end

            private

            def movie_params
                params.require(:movie).permit(:name, :movielist_id)
            end
        end
    end
end