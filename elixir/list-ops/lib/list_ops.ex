defmodule ListOps do
  def count([]), do: 0
  def count([_ | tail]), do: 1 + count(tail)

  def reverse(list), do: reverse(list, [])

  def reverse([], reversed), do: reversed
  def reverse([head | tail], reversed), do: reverse(tail, [head | reversed])

  def map([], _), do: []
  def map([head | tail], func), do: [func.(head) | map(tail, func)]

  def filter([], _), do: []

  def filter([head | tail], pred) do
    case pred.(head) do
      true ->
        [head | filter(tail, pred)]

      false ->
        filter(tail, pred)
    end
  end

  def reduce([], acc, _), do: acc

  def reduce([head | tail], acc, func) do
    reduce(tail, func.(head, acc), func)
  end

  def append(list_a, list_b), do: list_a ++ list_b

  def concat([]), do: []
  def concat([head | tail]), do: head ++ concat(tail)
end
