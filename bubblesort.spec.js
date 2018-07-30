describe('Bubble Sort', function(){

    it ('handles an empty array', function(){
        expect (bubbleSort([])).toEqual([]);
    })

    it ('sorts an array', function(){
        expect (bubbleSort([5, 4, 7, 2, 3])).toEqual([2, 3, 4, 5, 7]);
    })

    it ('handles an array with one element', function(){
        expect (bubbleSort([5])).toEqual([5]);
    })
});