// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let money={}
    if(currency<=0){
        return money
    }
    if(currency>10000){
        money.error="You are rich, my friend! We don\'t have so much coins for exchange"
        return money
    }
    
    money.H=Math.floor(currency/50)
    currency=currency%50
    money.Q=Math.floor(currency/25)
    currency=currency%25
    money.D=Math.floor(currency/10)
    currency=currency%10
    money.N=Math.floor(currency/5)
    currency=currency%5
    money.P=Math.floor(currency/1)

    for(var key in money){
        if(money[key]==0)
            delete money[key]
    }

    return money    
}
