function clear(){
    document.getElementsByClassName("fixed")[0].value="";
    document.getElementById("integer").value="";
}
function edbase64() {
    document.getElementById("choose").textContent = "Base64";
    document.getElementById("integer").hidden = true;
    clear();
    document.addEventListener("click", function (e) {
    if (e.target.id === "a1") {
        if(document.getElementById("encode").checked){
        
        const myString = document.getElementsByClassName("fixed")[0].value;
        console.log(myString);

        let encodedValue = btoa(myString);
        console.log(encodedValue); // Base64 çıktısı
        document.getElementById("output").textContent = "Encoded value " +encodedValue;
    }
    
    else{
        const myString = document.getElementsByClassName("fixed")[0].value;
        console.log(myString);

        let decodedValue = atob(myString);
        console.log(decodedValue); 
        document.getElementById("output").textContent = "Decoded value "+decodedValue;
        e.preventDefault();
    }}
    
    });
    
    }
function xor() {
    document.getElementById("choose").textContent = "XOR";
    document.getElementById("integer").placeholder="Enter key..."
    clear();
    document.getElementById("integer").hidden = false;
    document.addEventListener("click", function (e) {
    if (e.target.id === "a1") {
        if(document.getElementById("encode").checked){
            
            const myString = document.getElementsByClassName("fixed")[0].value;
            const key=document.getElementById("integer").value;
            let output = "";
        for (let i = 0; i < myString.length; i++) {
            // input ve key karakterlerini XOR'la
            let charCode = myString.charCodeAt(i) ^ key.charCodeAt(i % key.length);
            output += String.fromCharCode(charCode);
        }
        document.getElementById("output").textContent = "Encoded value " +output;
    }
    
    else{
            const myString = document.getElementsByClassName("fixed")[0].value;
            const key=document.getElementById("integer").value;
            let output = "";
        for (let i = 0; i < myString.length; i++) {
            // input ve key karakterlerini XOR'la
            let charCode = myString.charCodeAt(i) ^ key.charCodeAt(i % key.length);
            output += String.fromCharCode(charCode);
        }
        document.getElementById("output").textContent = "Decoded value " +output;
        e.preventDefault();
    }}});
    }



function caesar() {
    document.getElementById("choose").textContent = "Caesar";
    document.getElementById("integer").placeholder="Enter integer..."
    clear();
    document.getElementById("integer").hidden = false;
    document.addEventListener("click", function (e) {
    if (e.target.id === "a1") {
        if(document.getElementById("encode").checked){
                 let result = "";
                const textarea = document.getElementById("integer");
                const shift = parseInt(textarea.value.trim(), 10) % 26;

                const text = document.getElementsByClassName("fixed")[0].value;
                for (let i = 0; i < text.length; i++) {
                    let char = text[i];
                    if (char.match(/[a-z]/i)) {
                        let code = text.charCodeAt(i);
                        if (code >= 65 && code <= 90) {
                            char = String.fromCharCode(((code - 65 + shift + 26) % 26) + 65);
                        } else if (code >= 97 && code <= 122) {
                            char = String.fromCharCode(((code - 97 + shift + 26) % 26) + 97);
                        }
                    }
                    result += char;
                }

                document.getElementById("output").textContent = "Encoded value: " + result;
        }
    
    else{
             let result = "";
            const textarea = document.getElementById("integer");
            let shift = parseInt(textarea.value.trim(), 10) % 26; // let olarak değiştiriyoruz
            shift = -shift; // şimdi hata vermez

            const text = document.getElementsByClassName("fixed")[0].value;
            for (let i = 0; i < text.length; i++) {
                let char = text[i];
                if (char.match(/[a-z]/i)) {
                    let code = text.charCodeAt(i);
                    if (code >= 65 && code <= 90) {
                        char = String.fromCharCode(((code - 65 + shift + 26) % 26) + 65);
                    } else if (code >= 97 && code <= 122) {
                        char = String.fromCharCode(((code - 97 + shift + 26) % 26) + 97);
                    }
                }
                result += char;
            }

            document.getElementById("output").textContent = "Encoded value: " + result;
    }}});
    
    }   