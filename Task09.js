function presentVowels(aString)

    {//Changing all charecters to lowercase
    let vowels =[]
    const vowelCheck = "aeiou"
    aString= aString.toLowerCase()

    //Finding present vowels in string
    for (let i = 0; i < aString.length; i++) 
        {for (let j = 0; j < 5; j++) 
            {if (aString[i]==vowelCheck[j])
                {vowels.push(aString[i])}
            }; 
        }

    let nonRepeatingVowels = [...new Set(vowels)];//removing reapiting vowels from list of present vowels
    let output = nonRepeatingVowels.join(", ")
    return "Vowels: " +output +".";
    }