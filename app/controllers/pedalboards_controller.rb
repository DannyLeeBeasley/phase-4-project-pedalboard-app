class PedalboardsController < ApplicationController
    wrap_parameters format: []
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        pedalboards = Pedalboard.all 
        render json: pedalboards, status: :ok 
    end

    def create 
        pedalboard = Pedalboard.create(pedalboard_params)
        render json: pedalboard, status: :created
    end

    def update
        pedalboard = find_pedalboard
        pedalboard.update(pedalboard_params)
        render json: pedalboard, status: :created 
    end

    def destroy
        pedalboard = find_pedalboard
        pedalboard.destroy
        head :no_content
    end

    private

    def pedalboard_params
        params.permit(:name, :stereo, :price, :pedal_order, :user_id)
    end

    def find_pedalboard
        Pedalboard.find(params[:id])
    end

    def render_not_found_response
        render json: { error: pedalboard.errors.full_messages }, status: :not_found 
    end

end
