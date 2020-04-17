defmodule BeerSong do
  def verse(n),
    do: """
    #{line_one(n)}
    #{line_two(n)}
    """

  def lyrics, do: lyrics(99..0)

  def lyrics(range), do: range |> Enum.map_join("\n", &verse/1)

  defp line_one(0), do: "No more bottles of beer on the wall, no more bottles of beer."
  defp line_one(n),
    do: "#{n} #{pluralize_bottle(n)} of beer on the wall, #{n} #{pluralize_bottle(n)} of beer."

  defp line_two(0), do: "Go to the store and buy some more, 99 bottles of beer on the wall."
  defp line_two(1), do: "Take it down and pass it around, no more bottles of beer on the wall."
  defp line_two(n),
    do:
      "Take one down and pass it around, #{n - 1} #{pluralize_bottle(n - 1)} of beer on the wall."

  defp pluralize_bottle(n), do: if(n > 1, do: "bottles", else: "bottle")
end
