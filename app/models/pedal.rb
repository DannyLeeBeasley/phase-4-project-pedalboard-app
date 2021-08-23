class Pedal < ApplicationRecord
    has_many :pedalboard_pedals 
    has_many :pedalboards, through: :pedalboard_pedals
end
