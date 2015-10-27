require 'pry'

class School

  attr_accessor :name, :db

  # school = School.new("Haleakala Hippy School")

  def initialize(name)
    @db = {}
  end

  def db
    @db
  end

  def add(student_name, grade)
    @db[grade] ||=[] # @db[grade] (truthy) || @db[grade] = [] (falsey)

    # if !@db[grade]
    #   @db[grade] = []
    # end

    @db[grade] << student_name

  end

  def grade(grade)
    @db[grade]
  end

  def sort
    school.db.sort.to_h
  end


end

binding.pry
