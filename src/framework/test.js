const a = "?name=xrk&gender=man".slice(1);
const b = a.split('&');
const c = b.map(item => {
    let sp = item.split('=');
    let property = sp[0] === 'name' ? '__name' : sp[0];
    return {
        [property]:sp[1]
    }
});
let ret = {};
c.forEach(each => {
    Object.assign(ret,each);
});

console.log(ret);