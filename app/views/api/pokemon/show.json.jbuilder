json.pokemon do 
    json.extract! @pokemon, :id, :name, :attack, :defense, :moves, :poke_type, :item_ids
    json.image_url asset_path("pokemon_snaps/#{@pokemon.image_url}") # Have to do this because in a nested folder
    # json.item_ids @pokemon.items.map{ |item| item.id }
end

json.set! "items" do 
    @pokemon.items.each do |item| 
        json.set! item.id do
            json.extract! item, :id, :name, :pokemon_id, :price, :happiness, :image_url
            # json.image_url asset_path("#{item.image_url}") # Same thing as the image_url already given for the item
        end 
    end 
end 



