function bubbleSort(array){
    let loop = false;

    for (let i = 0; i < array.length; i++){

        if (array[i] > array[i + 1]){
            swap(array, i);
            loop = true;
        }
    }
    if (loop){
        return bubbleSort(array);
    }

    return array;
}

function swap(array, index){
    let current = array[index];

    array[index] = array[index + 1];
    array[index + 1] = current;
}