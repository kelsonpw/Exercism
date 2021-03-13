class SumOfMultiples
  def initialize(*args)
    @multiples = args.reject { |m| m == 0 }
  end

  def to(max)
    return 0 if @multiples.empty?
    found_multiples = []
    (@multiples.first...max).each do |int|
      @multiples.each do |multiple|
        found_multiples << int if int >= multiple and int % multiple == 0
      end
    end
    found_multiples.uniq.sum
  end
end
