class Matrix
  def initialize(body)
    @body = body
  end

  def rows
    @rows ||= @body.each_line.map do |line|
      line.split.map(&:to_i)
    end
  end

  def columns
    @columns ||= rows.transpose
  end
end
