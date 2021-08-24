class Pedal < ApplicationRecord
    has_many :pedalboard_pedals 
    has_many :pedalboards, through: :pedalboard_pedals
    validates :name, presence: true, uniqueness: true
    validates :effect_type, presence: true
    validates :pice, presence: true, numericality: { only_integer: true }
    validates :stereo, presence: true, inclusion: { in: [ true, false ] }
    validates :number_of_inputs, presence: true, numericality: { only_integer: true }
    validates :number_of_putputs, presence: true, numericality: { only_integer: true }
    validates :image, presence: true
    validates :category, presence: true, uniqueness: true
end
