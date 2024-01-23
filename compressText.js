function compressText(inputStr) {
    output = '';
    for (i=0; i<inputStr.length; i++) {
        repeatCounter = 1;
        for (j=i+1; j<inputStr.length; j++) {
            if (inputStr[i] == inputStr[j]) {
                repeatCounter++;
                i=j;
            }
//            else {
                // output = output + inputStr[i];
//                break;
//            }
        }
        output = output + inputStr[i] + repeatCounter;
    }
    if (output == '') { return -1 }
    return output;
}

console.log(compressText('aaaabbc'))
