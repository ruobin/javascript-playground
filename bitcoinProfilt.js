const inputData = [
    {
        "date": 1,
        "type": "buy",
        "price": 25,
        "amount": 5
    }, {
        "date": 2,
        "type": "buy",
        "price": 40,
        "amount": 10
    }, {
        "date": 3,
        "type": "sell",
        "price": 42,
        "amount": 7
    }, {
        "date": 4,
        "type": "sell",
        "price": 3,
        "amount": 1
    }, {
        "date": 5,
        "type": "buy",
        "price": 25,
        "amount": 5
    }, {
        "date": 6,
        "type": "sell",
        "price": 20,
        "amount": 10
    }
];

// [{"date":3,"gain_or_loss":89},{"date":4,"gain_or_loss":-37},{"date":6,"gain_or_loss":-155}]

function buildTheData(inputData) {
    var $a, x, Y, _Z, With;
    m = "dfsd";
    var a=Object.seal(Object.preventExtensions({"name": "John", "Age":21}));

    let balance = 0;
    let queue = [];
    let results = [];
    for (i = 0; i < inputData.length; i++) {
        if (inputData[i].type === "buy") {
            queue.push({ amount: inputData[i].amount, price: inputData[i].price });
        } else if (inputData[i].type === "sell") {
            let profitOrLoss = 0;
            let sellingAmount = inputData[i].amount;
            const sellingPrice = inputData[i].price;
            while (sellingAmount > 0) {
                const previousSellingAmount = sellingAmount;
                sellingAmount -= queue[0].amount;
                
                if (sellingAmount > 0) {
                    profitOrLoss += (sellingPrice - queue[0].price) * queue[0].amount;
                    queue.shift();
                } else {
                    queue[0].amount -= previousSellingAmount;
                    profitOrLoss += (sellingPrice - queue[0].price) * previousSellingAmount;
                }
            }

            results.push({
                date: inputData[i].date,
                gain_or_loss: profitOrLoss
            });
        }

    }
    return results;

}

console.log(JSON.stringify(buildTheData(inputData)));