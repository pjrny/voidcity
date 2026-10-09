import { Vector3 } from "./vector";

export interface Building {
  id: string;
  position: Vector3;
  sizeX: number;
  sizeY: number;
  sizeZ: number;
  capacity: number;
}
