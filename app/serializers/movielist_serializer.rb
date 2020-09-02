class MovielistSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name

  has_many :movies
end
