
Promise.resolve().then(() => {
    console.log('promise2');
})
process.nextTick(() => {
    console.log('nextTick')
    process.nextTick(() => {
        console.log('nextTick')
        process.nextTick(() => {
            console.log('nextTick')
            process.nextTick(() => {
                console.log('nextTick')
            })
        })
    })
})
const superFn = async() => {
    console.log('super');
    await subFn()
    console.log('superman');
}
function subFn() {
    console.log('sub');
}
superFn()

// super
// sub
// nextTick
// nextTick
// nextTick
// nextTick
// promise2
// superman
