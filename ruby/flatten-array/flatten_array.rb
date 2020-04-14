module FlattenArray
  module_function

  def flatten(value)
    return [value].compact unless value.kind_of?(Array)

    value.inject([]) { |acc, item| [*acc, *flatten(item)] }
  end
end
