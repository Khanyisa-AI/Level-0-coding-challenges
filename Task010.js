function commonLetters(word1,word2)
{
    {//Changing all charecters to lowercase
        let presentCommonLetters =[]
        word1= word1.toLowerCase()
        word2= word2.toLowerCase()

    //Finding present vowels in string
        for (let i = 0; i < word1.length; i++)
            {for (let j = 0; j < word2.length; j++)
                {
                if (word1[i]==word2[j])
                    {presentCommonLetters.push(word1[i])}
                }; 
            }
        let nonRepeatingLetters = [...new Set(presentCommonLetters)];//removing reapiting cha from list of present vowels
        let output = nonRepeatingLetters.join(", ")
        return "'Common letters: " +output +"'";
    }
}