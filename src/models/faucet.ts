import { ICaptcha } from "./captcha";
import { Currency } from './currency';
import { IPayout } from "./payout";
import { ITrust } from './trust';

export interface IFaucet {
  name: string;
  currency: Currency;
  frequency: number;
  payout: IPayout;
  url: string;
  pureUrl: string;
  minimum: number;
  fee: number;
  tx?: ITrust;
  captcha: ICaptcha[];
}

export class Faucet implements IFaucet {
  public name: string;
  public currency: Currency;
  public frequency: number;
  public payout: IPayout;
  public url: string;
  public pureUrl: string;
  public minimum: number;
  public fee: number;
  public tx?: ITrust;
  public captcha: ICaptcha[];

  public static fromJson(json: any): Faucet {
    const faucet = new Faucet();
    for (const key in json) {
      if (json.hasOwnProperty(key)) {
        faucet[key] = json[key];
      }
    }
    if (faucet.name.length > 25) {
      faucet.name = `${faucet.name.substr(0, 24)}…`;
    }
    return faucet;
  }

  public get isTrust(): boolean {
    return this.tx !== undefined && this.tx !== null;
  }

  public formatFrequency(): string {
    if (this.frequency >= 60) {
      return `${this.frequency / 60}時間`;
    } else if (this.frequency > 0) {
      return `${this.frequency}分`;
    }
    return "生成";
  }

  public formatMinimum(): string {
    let minimum = 0;
    if (!this.payout.requireRes) {
      minimum = this.minimum;
    } else {
      minimum = this.payout.minimum[this.currency.id];
    }

    if (minimum > 0) {
      return `${minimum.toFixed(8).replace(/(\.)?0+$/, "")} ${this.currency.symbol}`;
    }
    return "N/A";
  }

  public formatFee(): string {
    let fee = 0;
    if (!this.payout.requireRes) {
      fee = this.fee;
    } else {
      fee = this.payout.fee[this.currency.id]
    }

    if (fee > 0) {
      return `${fee.toFixed(8).replace(/(\.)?0+$/, "")} ${this.currency.symbol}`;
    }
    return "N/A";
  }
}