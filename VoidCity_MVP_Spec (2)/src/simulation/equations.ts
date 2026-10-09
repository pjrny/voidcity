export const populationFlow=(population:number,demand:number,efficiency:number)=>population*demand*efficiency;
export const foodDemand=(maxFood:number,currentFood:number)=>Math.max(0,maxFood-currentFood);
export const capacityFactor=(available:number,requested:number)=>requested===0?1:available/requested;
export const movementRate=(speed:number,cf:number)=>speed*cf;
