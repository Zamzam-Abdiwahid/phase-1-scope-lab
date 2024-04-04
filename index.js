var customerName = 'bob';
function
 upperCaseCustomerName() {
    customerName =
  customerName.toUpperCase();
 }

function setBestCustomer() {
  window.bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
  console.log(bestCustomer);
}

const leastFavoriteCustomer = 'zamzam';
function 
changeLeastFavoriteCustomer() {
  {leastFavoriteCustomer = 'zamu';
    }
}
describe('changeLeastFavoriteCustomer()', function() {
  it('unsuccessfully tries to reassign the least favorite customer', function() {
    expect(changeLeastFavoriteCustomer).to.throw('Assignment to constant variable.');
  });
});