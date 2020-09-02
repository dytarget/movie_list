module Api
    module V1
        class MovielistsController < ApplicationController
            protect_from_forgery with: :null_session

            def index
                movielists = Movielist.all

                render json: MovielistSerializer.new(movielists, options).serialized_json
            end

            def show
                movielist = Movielist.find(params[:id])

                render json: MovielistSerializer.new(movielist, options).serialized_json 
            end

            def create
                movielist = Movielist.new(movielist_params)

                if movielist.save
                    render json: MovielistSerializer.new(movielist).serialized_json
                else
                    render json: { error: movielist.error.message},status:422
                end
            end

            def update
                movielist = Movielist.find(params[:id])

                if movielist.update(movielist_params)
                    render json: MovielistSerializer.new(movielist, options).serialized_json
                else
                    render json: { error: movielist.error.message},status:422
                end
            end

             def destroy
                movielist = Movielist.find(params[:id])

                if movielist.destroy
                    head :no_content
                else
                    render json: { error: movielist.error.message},status:422
                end
            end

            private

            def movielist_params
                params.require(:movielist).permit(:name)
            end

            def options
                @options ||= {include: %i[movies]}
            end
        end
    end
end