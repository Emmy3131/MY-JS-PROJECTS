class BankSystem{
  static bankName='Access';
  static interest = 200;
  static accounts =[];
  static storeAccount(account){
    this.accounts.push(account)
  }
  static getTotalAccount(){
    return `The total number of accounts:${BankSystem.accounts.length}`;
  }
  constructor(accountName){
    this.accountName = accountName;
    this.accountBalance = 0;
    this.accountNumber = new Date() * 10;
  }

 

  deposit(amount){
    if(amount > 0){
      this.accountBalance += amount;
      console.log(`deposite successfull, new balance ${this.accountBalance}`)
    }else{
      console.log('invalid deposit');
    }
  }

  withdraw(amount){
    if(amount> 0 && amount < this.accountBalance){
      this.accountBalance -= amount;
      console.log(`withdrawal successfull, new balance ${this.accountBalance}`);
    }else if(amount > this.accountBalance){
      console.log('insufficient balance'); 
    }else{
      console.log('invalid trasanction')
    }
  }



}

const account1 = new BankSystem('Arinze Uche');
account1.deposit(100)
console.log(account1);
account1.withdraw(50);
console.log(account1);

const account2 = new BankSystem('Michael Andrew');

BankSystem.storeAccount(account1)
BankSystem.storeAccount(account2)
console.log(BankSystem.interest);


console.log('ALL ACCOUNTS', BankSystem.accounts);

console.log(BankSystem.getTotalAccount());

