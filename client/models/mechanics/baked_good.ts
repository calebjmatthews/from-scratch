export default class BakedGoodMechanic implements BakedGoodMechanicInterface {
  recipeName: string;
  quality: number;
  qualityMultiplier: number;
  time: number;
  timeMultiplier: number;
  completion: number;
  actionsUsed: string[];

  constructor(bakedGoodMechanic: BakedGoodMechanicInterface) {
    Object.assign(this, bakedGoodMechanic);
  }
}

interface BakedGoodMechanicInterface {
  recipeName: string;
  quality: number;
  qualityMultiplier: number;
  time: number;
  timeMultiplier: number;
  completion: number;
  actionsUsed: string[];
}
