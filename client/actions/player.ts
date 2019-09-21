export const GAIN_MONEY = 'GAIN_MONEY';
export function gainMoney(money: number, toGain: number) {
  return {
    type: GAIN_MONEY,
    money: (money + toGain)
  }
}
