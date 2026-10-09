export enum SimLevel { FIELD, FLOW, GROUP, AGENT }
export interface TransitionRule { from:SimLevel; to:SimLevel; zoomThreshold:number; }
export const rules=[
{from:SimLevel.FIELD,to:SimLevel.FLOW,zoomThreshold:2},
{from:SimLevel.FLOW,to:SimLevel.GROUP,zoomThreshold:8},
{from:SimLevel.GROUP,to:SimLevel.AGENT,zoomThreshold:20}
];
