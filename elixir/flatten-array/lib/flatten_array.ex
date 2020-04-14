defmodule FlattenArray do
  def flatten(list), do: flatten(list, [])
  def flatten([], acc), do: acc
  def flatten([nil | tail], acc), do: flatten(tail, acc)
  def flatten([head | tail], acc) when is_list(head), do: flatten(tail, flatten(head, acc))
  def flatten([head | tail], acc), do: flatten(tail, acc ++ [head])
end
