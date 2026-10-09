export enum SimLevel {
  FIELD,
  FLOW,
  GROUP,
  AGENT
}

export function determineLevel(
  zoom: number
): SimLevel {
  if (zoom > 20) {
    return SimLevel.AGENT;
  }

  if (zoom > 8) {
    return SimLevel.GROUP;
  }

  if (zoom > 2) {
    return SimLevel.FLOW;
  }

  return SimLevel.FIELD;
}
