"use strict";

class CheckingAccount extends Account {
  constructor(overdraftLimit, number) {
    super(number); // the account number
    this._overdraftLimit = overdraftLimit;
  }
  getOverdraftLimit() {
    return this._overdraftLimit;
  }
  setOverdraftLimit(overdraftLimit) {
    this._overdraftLimit = overdraftLimit;
  }
  withdraw(amount) {
    if (amount <= 0) {
      throw new RangeError("Withdraw amount has to be greater than zero");
    }
    if (amount > this._overdraftLimit + this._balance) {
      throw Error("Over the draft limit");
    }
    this._balance -= amount;
  }
  endOfMonth() {
    if (this.getBalance() < 0) {
      return `Warning, low balance CheckingAccount ${this.getNumber()}: balance: ${this.getBalance()} overdraft limit: ${
        this._overdraftLimit
      }`;
    }
    return "";
  }
  toString() {
    return (
      "Checking Account " +
      this.getNumber() +
      ": balance " +
      this.getBalance() +
      ": overdraft limit " +
      this._overdraftLimit
    );
  }
}
