# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# PSEUDOCODE
# create method with_letter
# input: array of words and single letter
# output: array of all words containing that letter

def with_letter(arr, letter)
    arr.select do |word|
        word.include?(letter)
    end
end

# p with_letter(beverages_array, letter_o)
# p with_letter(beverages_array, letter_p)

# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

# PSEUDOCODE
# create method cleaned_array
# input: hash
# output: array with all values at their own index, in alphabetical order
# get values of hash in an array using .values
# get rid of outer array using .flatten
# sort alphabetically using .sort

def cleaned_array(hash)
    with_nested = hash.values
    with_nested.flatten.sort
end

# p cleaned_array(us_states)

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# class Bike
#     attr_accessor :model, :wheels, :current_speed
#     def initialize(model)
#         @model = model
#         @wheels = 2
#         @current_speed = 0
#     end
#     def bike_info
#         "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
#     end
# end
# trek = Bike.new('Trek')
# p trek.bike_info

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

class Bike
    attr_accessor :model, :wheels, :current_speed
    def initialize(model)
        @model = model
        @wheels = 2
        @current_speed = 0
    end
    def bike_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end
    def pedal_faster(n)
        @current_speed = @current_speed + n
    end
    def brake(num)
        if num >= @current_speed
            @current_speed = 0
        else @current_speed = @current_speed - num
        end
    end
end

trek = Bike.new('Trek')
trek.pedal_faster(10)
trek.pedal_faster(15)
trek.pedal_faster(5)
trek.brake(15)
trek.brake(40)
p trek.bike_info