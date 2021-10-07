export function formatToView(number: number) {
  let value = `${number}`;
  if (number >= 1000000000) {
    value = value.slice(0, -8);
    if (value[1] !== "0") return `${value[0]}.${value[1]}B`;
    return value[0] + "B";
  }
  if (number >= 1000000) {
    value = value.slice(0, -5);
    if (value[1] !== "0") return `${value[0]}.${value[1]}M`;
    return value[0] + "M";
  }
  if (number >= 1000) {
    value = value.slice(0, -2);
    if (value[1] !== "0") {
      return `${value[0]}.${value[1]}K`;
    }
    return value[0] + "K";
  }
  return value;
}
