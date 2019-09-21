import BakedGoodMechanic from './baked_good';

export default class BatchResultMechanic {
  totalQuality: number;
  totalTime: number;
  premiumChances: number[];
  premiumSuccess: boolean[];

  constructor(batchResultMechanic: BatchResultMechanicInterface = null) {
    if (batchResultMechanic != null) {
      Object.assign(this, batchResultMechanic);
    }
  }

  formFromBakedGoods(bakedGoodMechanics: BakedGoodMechanic[]) {
    this.totalQuality = 0;
    this.totalTime = 0;
    this.premiumChances = [];
    this.premiumSuccess = [];
    bakedGoodMechanics.map((bgm) => {
      let premium = (Math.random() < bgm.premiumChance);

      let quality = bgm.quality * bgm.qualityMultiplier;
      if (premium == true) {
        quality *= 2;
      }
      this.totalQuality += quality;
      this.totalTime += (bgm.time * bgm.timeMultiplier);
      this.premiumChances.push(bgm.premiumChance);
      this.premiumSuccess.push(premium);
    });
  }
}

interface BatchResultMechanicInterface {
  totalQuality: number;
  totalTime: number;
  premiumChances: number[];
  premiumSuccess: boolean[];
}
