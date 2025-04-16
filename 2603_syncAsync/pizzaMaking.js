/**
 * step 1 . give call to domionos - 2 sec
 * 2. order placed -1s
 * 3. cook -5s
 * 4. add cheese -2s
 * 5. out for dilivery -3s
 * 6. dilivered -7s
 * 7. ate pizza -1s
 * 
 * create a notification system for each steps.
 */



// we can use setTimeout

// setTimeout(() => {
//     console.log('Call to Domino')
// }, 2000);
// setTimeout(() => {
//     console.log('order placed')
// }, 1000);
// setTimeout(() => {
//     console.log('cooking')
// }, 5000);
// setTimeout(() => {
//     console.log('cheese')
// }, 2000);
// setTimeout(() => {
//     console.log('delivered')
// }, 7000);
// setTimeout(() => {
//     console.log('ate pizza')
// }, 2000);

// order placed
// Call to Domino
// cheese
// ate pizza
// cooking
// delivered

// the seq. is not as we require.
 
// we should use next process after the one is completed.

setTimeout(() => {
    console.log('Call to Domino');
    setTimeout(()=>{
        console.log('Order placed');
        setTimeout(()=>{
            console.log('cooking');
            setTimeout(()=>{
                console.log('Add chesse')
            },2000)
        },5000)
    },3000)
}, 2000);

// callback hell! ie many nested callbacks.

// Promise is alternative to callback hell