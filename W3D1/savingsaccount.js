"use strict";

class SavingsAccount extends Account {
  constructor(interest, number) {
    super(number); // the account number
    this._intreset = interest;
  }
  getInterest() {
    return this._intreset;
  }
  setInterest(intreset) {
    this._intreset = intreset;
  }
  addInterest() {
    this.deposit((this.getBalance() * this.getInterest()) / 100);
  }
  endOfMonth() {
    this.addInterest();
    return `Interest added SavingsAccount ${this.getNumber()}: balance: ${this.getBalance()} interest: ${
      this._intreset
    }`;
  }

  toString() {
    return (
      "Savings Account " +
      this.getNumber() +
      ": balance " +
      this.getBalance() +
      ": intreset " +
      this.getInterest()
    );
  }
}
