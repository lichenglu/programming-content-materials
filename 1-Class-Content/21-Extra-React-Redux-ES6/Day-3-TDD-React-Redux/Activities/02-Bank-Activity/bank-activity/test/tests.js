//Write your tests here! Remember, your assertions/expectations library will have to be required. Make sure you run npm install so you have the files you need and MAKE SURE TO REQUIRE CHAI! (or other assertion library)
const bank = require('../helpers/bank');

// Don't worry about writing a test for 'showAccounts', as it's just a console.log statement. Native code is already heavily tested.
let {showAccounts,withdraw,deposit,transferFunds} = bank;

describe('A user can', ()=>{

    //Don't touch this code here. This beforeEach runs once before each 'it' block. We use this to provide a consistent starting state for our application. 
    beforeEach(()=>{
        bank.savings=10;
        bank.checking=10;
    });

    //Here are two ways to allow you to write our your test use case without writing the actual assertion/expectation yet. This can be useful in case you have 100's of tests that need to be written and you don't have time to write them all immediately.  
    xit('write a pending test',()=>{

    });

    it('write another pending test');

});//end describe
