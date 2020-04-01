class ListOps
  def self.arrays(list)
    len = 0
    for _ in list
      len += 1
    end
    len
  end

  def self.reverser(list)
    reversed = []
    len = arrays(list) - 1
    for i in 0..len
      reversed << list[len - i]
    end
    reversed
  end

  def self.concatter(list_a, list_b)
    [*list_a, *list_b]
  end

  def self.mapper(list)
    result = []
    for item in list
      result << yield(item)
    end
    result
  end

  def self.filterer(list)
    result = []
    for item in list
      result << item if yield(item)
    end
    result
  end

  def self.reduce(list, initial)
    acc = initial
    for item in list
      acc = yield(acc, item)
    end
    acc
  end

  def self.sum_reducer(nums)
    reduce(nums, 0) { |acc, v| acc + v }
  end

  def self.factorial_reducer(nums)
    reduce(nums, 1) { |acc, v| acc * v }
  end
end
