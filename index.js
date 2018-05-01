const singleDigit = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]

const doubleDigit = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]

const tripleDigit = ["", "one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"]

for(let i = 1; i <= 1000; i++) {
    if(i < 10) {
        document.write(singleDigit[i] + ", ")
    }
    else if(i < 20) {
        document.write(teens[i - 10] + ", ")
    }
    else if(i < 100) {
        document.write(doubleDigit[Math.floor(i / 10)] + " " + singleDigit[i % 10] + ", ")
    }
    else if(i < 1000) {
        document.write(tripleDigit[Math.floor(i / 100)] + " ")
        if((Math.floor(i / 10)) % 10 == 1) {
            document.write(teens[i % 10] + ", ")
        }
        else {
            document.write(doubleDigit[(Math.floor(i / 10)) % 10] + " " + singleDigit[i % 10] + ", ")
        }    
    }
    else if (i == 1000) {
        document.write("one thousand")
    }
}