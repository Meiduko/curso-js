// CÁLCULO DE AÑOS FELINOS
var humanAge = 0
console.log("GATO   HUMANO")
console.log("-------------")

for (let catAge = 0; catAge < 22; catAge++) {
    if (catAge == 1){
        humanAge = 15;
    } else if (caºtAge == 2) {
        humanAge = 24;
    } else {
        humanAge += 4;
    }
    console.log(" "+catAge+" "+humanAge)
}