ids.map(()=>{
    let count = 0;
    while(document.getElementById(count)){
        document.getElementById(count).id=ids[count];
        if (document.getElementById(count+'img')) {
            document.getElementById(count+'img').id=ids[count]+'img';
        }
        count++;
    }
})
