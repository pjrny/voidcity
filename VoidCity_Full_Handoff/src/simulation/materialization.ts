export enum SimLevel{FIELD,FLOW,GROUP,AGENT}
export interface TransitionRule{from:SimLevel;to:SimLevel;zoomThreshold:number;}