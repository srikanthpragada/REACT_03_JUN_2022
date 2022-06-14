
function process(func, value)
{
     func(value)
}

function display(msg) {
    console.log(msg)
}

process(display, "Hello!")
process(console.log, "Hello!")