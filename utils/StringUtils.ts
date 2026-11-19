export class StringUtils {
   static extractPrice(rawText: string): number
    {
    const match=rawText.replace(/[^0-9.]/g,'');
    return parseFloat(match);
            
    }   

    static genrateRandomZipcode():string
    {
        return String(Math.floor(10000 + Math.random() * 90000).toString);

    }
}