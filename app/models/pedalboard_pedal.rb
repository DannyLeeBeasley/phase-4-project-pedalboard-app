class PedalboardPedal < ApplicationRecord
  belongs_to :pedalboard
  belongs_to :pedal
end
