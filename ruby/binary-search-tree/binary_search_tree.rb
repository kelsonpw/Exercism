class Bst
  attr_reader :data, :left, :right

  def initialize(data)
    @data = data
    @left = nil
    @right = nil
  end

  def insert(new_data)
    if new_data > @data
      insert_right(new_data)
    else
      insert_left(new_data)
    end
  end

  def each
    if block_given?
      yield_each { |el| yield(el) }
    else
      Enumerator.new do |y|
        yield_each { |el| y << el }
      end
    end
  end

  private

  def yield_each
    @left.each { |el| yield(el) if el } if @left
    yield(@data) if @data
    @right.each { |el| yield(el) if el } if @right
  end

  def insert_left(new_data)
    if @left
      @left.insert(new_data)
    else
      @left = Bst.new(new_data)
    end
  end

  def insert_right(new_data)
    if @right
      @right.insert(new_data)
    else
      @right = Bst.new(new_data)
    end
  end
end
