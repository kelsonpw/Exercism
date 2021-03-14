const not = <InputType>(fn: (x: InputType) => boolean) => (
  x: InputType
): boolean => !fn(x);

export const keep = <ItemType>(
  items: ItemType[],
  predicate: (item: ItemType) => boolean
): ItemType[] => {
  const result = [];
  for (const item of items) {
    if (predicate(item)) {
      result.push(item);
    }
  }
  return result;
};

export const discard = <ItemType>(
  items: ItemType[],
  predicate: (item: ItemType) => boolean
): ItemType[] => keep<ItemType>(items, not(predicate));
