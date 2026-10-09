export enum FlowType {
  POPULATION,
  FOOD,
  WOOD,
  LABOR
}

export interface Flow {
  id: string;
  type: FlowType;
  quantity: number;
  sourceId: string;
  targetId: string;
  progress: number;
  velocity: number;
}
