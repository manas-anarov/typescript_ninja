
type StrongOrNum  = string | number;
type ObjWithName  = {name: string, uid:StrongOrNum};


const logDetails = (uid: StrongOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

const greet = (user: ObjWithName) => {
    console.log(`${user} say hello`);
}