json.extract! @guest, :name, :age, :favorite_color
# json.partial! partial: 'guests/#{@guest.id}/gifts', as: :gifts
json.gifts @guest.gifts do |gift|
  json.description gift.description
  json.title gift.title
end
