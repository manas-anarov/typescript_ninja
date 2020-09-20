
class Invoice{
    // readonly client: string;
    // private details: string;
    // public amount: number;

    constructor(
        readonly client:string,
        private details: string,
        public amount: number,
    ){
        // this.client = c;
        // this.details = b,
        // this.amount = a;
    }

    format(){
        return `${this.client} owes f${this.amount} for ${this.details}`;
    }
}

const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);


let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => {
    console.log(inv.client, inv.format());
})

const form = document.querySelector('.new-item-form') as HTMLFormElement;


const type = document.querySelector('#type')as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom')as HTMLInputElement;
const details = document.querySelector('#details')as HTMLInputElement;
const amount = document.querySelector('#amount')as HTMLInputElement;


form.addEventListener('submit', (e:Event) =>{
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.value
    )
})
console.log(type);