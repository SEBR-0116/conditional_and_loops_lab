let foods = ['fudge', 'cheese', 'strawberrie', 'pinneapple', 'burrito', 'pizza', 'funnel cake', 'falafel', 'french omlet']

for (let i = 0; i < foods.length; i++) {
    if (foods[i].charAt(0) === 'f') {
        console.log(foods[i])
    }
}

// you only need [i] when inside a function or loop