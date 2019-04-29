function test() {
    let a = 0;
    for (let i = 0; i < 10; i ++) {
        if (i === 5) {
            a = i;
        }
    }
    console.log('a=',a);
}
test();