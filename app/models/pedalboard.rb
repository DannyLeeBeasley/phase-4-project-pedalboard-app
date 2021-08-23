class Pedalboard < ApplicationRecord
  belongs_to :user
  has_many :pedalboard_pedals, dependent: :destroy
  has_many :pedals, through: :pedalboard_pedals
end
