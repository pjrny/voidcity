export function populationFlow(
  population: number,
  demand: number,
  efficiency: number
): number {
  return population *
         demand *
         efficiency;
}

export function movementRate(
  speed: number,
  capacityFactor: number
): number {
  return speed *
         capacityFactor;
}
