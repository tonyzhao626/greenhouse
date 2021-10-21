json.array! @tile_carousel_campaigns do |campaign|
  json.partial! "api/campaigns/tile", campaign: campaign
end
