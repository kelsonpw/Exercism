defmodule BankAccount do
  defmodule Account do
    @moduledoc """
    A bank account that supports access from multiple processes.
    """

    @typedoc """
    An account handle.
    """
    @opaque account :: pid

    def init([]), do: {:ok, 0}

    def handle_call(_, _, :closed), do: {:reply, {:error, :account_closed}, :closed}

    def handle_call(:balance, _, balance), do: {:reply, balance, balance}

    def handle_call({:update, amount}, _, balance) do
      new_balance = balance + amount
      {:reply, new_balance, new_balance}
    end

    def handle_cast(:close, _) do
      {:noreply, :closed}
    end
  end

  @doc """
  Open the bank. Makes the account available.
  """

  def open_bank() do
    {:ok, account} = GenServer.start_link(Account, [])
    account
  end

  @doc """
  Close the bank. Makes the account unavailable.
  """

  def close_bank(account) do
    GenServer.cast(account, :close)
  end

  @doc """
  Get the account's balance.
  """

  def balance(account) do
    GenServer.call(account, :balance)
  end

  @doc """
  Update the account's balance by adding the given amount which may be negative.
  """

  def update(account, amount) do
    GenServer.call(account, {:update, amount})
  end
end
