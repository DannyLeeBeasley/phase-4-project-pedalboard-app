class Pedalboard < ApplicationRecord
  belongs_to :user
  has_many :pedalboard_pedals
  has_many :pedals, through: :pedalboard_pedals
end
