defmodule LinkedList do
  @opaque t :: tuple()

  defstruct elem: nil, tail: nil

  @empty_error {:error, :empty_list}

  def new() do
    %LinkedList{}
  end

  def push(%LinkedList{} = list, elem) do
    %LinkedList{
      elem: elem,
      tail: list
    }
  end

  def length(%LinkedList{elem: nil}), do: 0

  def length(%LinkedList{tail: tail}) do
    1 + LinkedList.length(tail)
  end

  def empty?(%LinkedList{elem: nil}), do: true
  def empty?(_list), do: false

  def peek(%LinkedList{elem: nil}), do: @empty_error

  def peek(%LinkedList{elem: elem}), do: {:ok, elem}

  def tail(%LinkedList{elem: nil}), do: @empty_error

  def tail(%LinkedList{tail: tail}) do
    {:ok, tail}
  end

  def pop(%LinkedList{elem: nil}), do: @empty_error

  def pop(%LinkedList{elem: elem, tail: tail}) do
    {:ok, elem, tail}
  end

  def from_list([]), do: new()

  def from_list([head | tail]) do
    %LinkedList{
      elem: head,
      tail: from_list(tail)
    }
  end

  def to_list(%LinkedList{elem: nil}), do: []

  def to_list(%LinkedList{elem: elem, tail: tail}) do
    [elem | to_list(tail)]
  end

  def reverse(list), do: reverse(list, new())

  def reverse(%LinkedList{elem: nil}, reversed), do: reversed

  def reverse(%LinkedList{elem: elem, tail: tail}, reversed) do
    reverse(tail, push(reversed, elem))
  end
end
