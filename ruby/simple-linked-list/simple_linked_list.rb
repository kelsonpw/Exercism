=begin
Write your code for the 'Simple Linked List' exercise in this file. Make the tests in
`simple_linked_list_test.rb` pass.

To get started with TDD, see the `README.md` file in your
`ruby/simple-linked-list` directory.
=end

class Element
  attr_accessor :datum, :next

  def initialize(value)
    @datum = value
    @next = nil
  end
end

class SimpleLinkedList
  def initialize(initial = nil)
    @head = Element.new(nil)

    self.push_values(initial) if initial
  end

  def push(element)
    element.next, @head = @head, element

    self
  end

  def push_values(values)
    for val in values
      self.push(Element.new(val))
    end
  end

  def pop
    node, @head = @head, @head.next

    node.datum.nil? ? nil : node
  end

  def to_a
    return [] unless @head.datum
    current = @head
    result = []

    while current && current.datum
      result << current.datum
      current = current.next
    end

    result
  end

  def reverse!
    current = @head
    prev = nil
    while current && current.datum
      current.next, prev, current = prev, current, current.next
    end
    @head = prev
    self
  end
end
