import CardRequirement from '../cards/card_requirement';
import { utils } from '../utils';

export default class BakedGoodMechanic implements BakedGoodMechanicInterface {
  recipeName: string;
  quality: number;
  qualityMultiplier: number;
  time: number;
  timeMultiplier: number;
  completion: number;
  premiumChance: number;
  actionsUsed: string[];
  failure: boolean;
  missedRequirements: CardRequirement[];

  constructor(bakedGoodMechanic: BakedGoodMechanicInterface) {
    Object.assign(this, bakedGoodMechanic);
  }

  getResultDescription(): string[] {
    let lines: string[] = [];
    let qualityLine: string = ('Quality: ' + this.quality);
    if (this.qualityMultiplier != 1) {
      qualityLine += ('x' + Math.floor((this.qualityMultiplier / 100)));
    }
    lines.push(qualityLine);
    let timeLine: string = ('Time: ' + utils.formatDuration(this.time * 1000));
    if (this.timeMultiplier != 1) {
      timeLine += ('x' + Math.floor((this.timeMultiplier / 100)));
    }
    lines.push(timeLine);
    if (this.premiumChance > 0) {
      lines.push('Premium: ' + this.premiumChance + '%');
    }
    return lines;
  }

  getFailureDescription(): string[] {
    let lines: string[] = [];
    this.missedRequirements.map((missedReq) => {
      if (missedReq.type != null && missedReq.subtype != null) {
        lines.push(missedReq.quantity + ' ' + utils.toFirstUpperCase(missedReq.subtype)
          + ' ' + utils.toFirstUpperCase(missedReq.type));
      }
      else if (missedReq.type != null && missedReq.subtype == null) {
        lines.push(missedReq.quantity + ' ' + utils.toFirstUpperCase(missedReq.type));
      }
      else if (missedReq.type == null && missedReq.subtype != null) {
        lines.push(missedReq.quantity + ' ' + utils.toFirstUpperCase(missedReq.subtype)
          + ' ingredient');
      }
    });
    return lines;
  }
}

interface BakedGoodMechanicInterface {
  recipeName: string;
  quality: number;
  qualityMultiplier: number;
  time: number;
  timeMultiplier: number;
  completion: number;
  premiumChance: number;
  actionsUsed: string[];
  failure: boolean;
  missedRequirements: CardRequirement[];
}
