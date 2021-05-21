// Frontend Algorithms Task "I"

function convertFahrToCelsius(F) {
    
    var C = (F - 32) * 5/9 

    var x = C.toFixed(4)

    if (Array.isArray(F)) {
        return "[1,2,3] is not a valid number but a/an array"

    } else if (F === Object) {
        return "{temp:0} is not a valid number but a/an object"

    } else if (F == Boolean) {
        return "true is not a valid number but a/an boolean"

    } else if (F === String) {
        return "is not a valid number but a/an string"

    } else {
        return x
    }

}
convertFahrToCelsius();




// Frontend Algorithms Task "II" 



function checkYuGiOh (num) {
    const array = [ ];
    const newArray = [ ];
    if (typeof num === "number") {
        
        for (i = 1; i <= num; i++) {

            array.push (i)
        }
        for (i in array) {
            if (array[i] % 2 === 0 || array[i] % 3 === 0 || array[i] % 5 === 0) {
                var str = "";
                     
                if (array[i] % 2 === 0) {
                    str += ("yu");
                } 
                if (array[i] % 3 === 0) {
                    if (str != "") {
                        str += ("-gi")
                    }else {
                        str += ("gi")
                    }
                }  
                if (array[i] % 5 === 0) {
                    if (str != "") {
                        str += ("-oh")
                    }else {
                        str += ("oh")
                    }
                }
                newArray.push(str);

            } else {
                newArray.push(array[i]);
            }
        } 
    } else {
        console.log (`Invalid Parameter: ${JSON.stringify(num)}`);
        
        return (`Invalid Parameter: ${JSON.stringify(num)}`);
    }
        
   console.log(newArray);
   return(newArray);
}

checkYuGiOh(10);