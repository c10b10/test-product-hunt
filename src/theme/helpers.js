// @flow

export function scaleSpacing(remVal: string, scale: number) {
  if (/([0-9]+)\.?([0-9]*)\s*rem/.test(remVal)) {
    return parseFloat(remVal) * scale + "rem";
  }
  return remVal;
}

export function doubleSpacing(remVal: string) {
  scaleSpacing(remVal, 2);
}
