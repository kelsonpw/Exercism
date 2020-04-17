defmodule Matrix do
  defstruct values: []

  @doc """
  Convert an `input` string, with rows separated by newlines and values
  separated by single spaces, into a `Matrix` struct.
  """
  @spec from_string(input :: String.t()) :: %Matrix{}
  def from_string(input) do
    values =
      input
      |> String.split("\n")
      |> Enum.map(fn row ->
        row
        |> String.split(" ")
        |> Enum.map(&String.to_integer/1)
      end)

    %Matrix{values: values}
  end

  @doc """
  Write the `matrix` out as a string, with rows separated by newlines and
  values separated by single spaces.
  """
  @spec to_string(matrix :: %Matrix{}) :: String.t()
  def to_string(%Matrix{values: values}) do
    values
    |> Enum.map_join(
      "\n",
      &Enum.join(&1, " ")
    )
  end

  @doc """
  Given a `matrix`, return its rows as a list of lists of integers.
  """
  @spec rows(matrix :: %Matrix{}) :: list(list(integer))
  def rows(%Matrix{values: values}) do
    values
  end

  @doc """
  Given a `matrix` and `index`, return the row at `index`.
  """
  @spec row(matrix :: %Matrix{}, index :: integer) :: list(integer)
  def row(%Matrix{} = matrix, index) do
    matrix
    |> rows()
    |> Enum.at(index)
  end

  @doc """
  Given a `matrix`, return its columns as a list of lists of integers.
  """
  @spec columns(matrix :: %Matrix{}) :: list(list(integer))
  def columns(%Matrix{values: values}) do
    cols =
      values
      |> Enum.at(0)
      |> Enum.count()

    0..(cols - 1)
    |> Enum.map(fn col ->
      values
      |> Enum.map(&Enum.at(&1, col))
    end)
  end

  @doc """
  Given a `matrix` and `index`, return the column at `index`.
  """
  @spec column(matrix :: %Matrix{}, index :: integer) :: list(integer)
  def column(%Matrix{} = matrix, index) do
    matrix
    |> columns()
    |> Enum.at(index)
  end
end
