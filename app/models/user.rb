class User < ApplicationRecord
    has_many :pedalboards
    has_many :pedalboard_pedals, through: :pedalboards
end
