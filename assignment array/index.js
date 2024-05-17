function calculateAverage(numbers) {
    let sum =0;
    for(let i=0;i < numbers.length;i++) {
        sum += numbers[i];

    }
    return numbers.length === 0 ? 0 : sum /numbers.length;

}
const numbers =[1,2,3,7,9];
const average =calculateAverage(numbers);
console.log(average);