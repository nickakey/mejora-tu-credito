import { jsPDF } from "jspdf";




export function generate() { 
    const doc = new jsPDF();
    const content = 
    `[Date]
 
[Creditor name]
     
[Creditor address]
     
Re: [Account number: XXXXXXXXX]
     
Dear [Creditor],
     
Thank you for taking a couple of minutes out of your busy day to read this letter. I’ve enjoyed my relationship with [Creditor name] since [Year account was opened]. 
     
I’m writing because I noticed your company reported a late payment in [Date of late payment] on my credit reports. I am requesting a goodwill adjustment to remove this late payment from my TransUnion, Experian and Equifax credit reports.
     
Upon review of my records, I realize that I did indeed miss the payment deadline. Unfortunately, [Explain why you missed the payment]. I take full responsibility for the mistake and have made sure it won’t happen again. As you can see from my payment history, I’ve made every payment on time both before and after the late payment.
     
I’m in the process of applying for a home loan and the negative impact of the late payment could result in a denial for my loan or a much higher interest rate that could cost me a significant amount of money. If you could make the goodwill adjustment requested, I believe it will significantly improve my chances of approval and save me unnecessary costs in the process.
Thank you for your time and consideration.
Sincerely,
     
     
     
[Your printed name]
     
[Your address]`

    const text = doc.splitTextToSize( content, 190)
    doc.text(text, 10, 10);
    
    doc.save("a4.pdf");

}