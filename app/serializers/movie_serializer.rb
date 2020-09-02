class MovieSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :movielist_id
end
