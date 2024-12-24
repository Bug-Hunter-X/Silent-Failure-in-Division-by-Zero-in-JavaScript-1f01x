function foo(a, b) {
    if (b === 0) {
        throw new Error('Division by zero');
    } else if (a === 0) {
        return 0; 
    }
    return a / b; 
}
foo(0,0); //This will now throw an error