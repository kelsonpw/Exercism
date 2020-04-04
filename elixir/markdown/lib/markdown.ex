defmodule Markdown do
  def parse(md) do
    md
    |> String.split("\n")
    |> Enum.map_join(&process/1)
    |> wrap_lists()
    |> bold()
    |> em()
  end

  defp process("#" <> text), do: create_header(text, 1)
  defp process("* " <> text), do: create_element(text, "li")
  defp process(text), do: create_element(text, "p")

  defp create_header("#" <> text, level), do: create_header(text, level + 1)
  defp create_header(" " <> text, level), do: create_element(text, "h#{level}")

  defp create_element(text, tag), do: "<#{tag}>#{text}</#{tag}>"

  defp wrap_lists(text),
    do: String.replace(text, ~r/(?<!<\/li>)<li>(.*)<\/li>(?!<li>)/, "<ul><li>\\1</li></ul>")
  def bold(text), do: String.replace(text, ~r/__([^_]*)__/, "<strong>\\1</strong>")
  def em(text), do: String.replace(text, ~r/_([^_]*)_/, "<em>\\1</em>")
end
