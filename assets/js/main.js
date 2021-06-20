
    
    let mass = [10, 18, 33, 7, 31, 3, 8, 22, 29, 7, 8]
   
   let buy = 0;
   let wesell = 0;
   let profit = 0;
   let maxprofit = 0;

   for(a = 0; a < mass.length; a++){
       for(b = a + 1; b < mass.length; b++){
           profit = mass[b] - mass[a];
           if(profit > maxprofit){
              maxprofit = profit;
              buy = a + 1;
              wesell = b + 1;
            }
        }
    }
    console.log(`Покупаем на ${buy} день продаем на ${wesell} день. максимальная прибыль ${maxprofit}`);