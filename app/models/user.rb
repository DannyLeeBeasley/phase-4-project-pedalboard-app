class User < ApplicationRecord
    has_many :pedalboards
    has_many :pedalboard_pedals, through: :pedalboards
    validates :name, presence: true, uniqueness: true
    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :password_digest, presence: true, uniqueness: true
end
