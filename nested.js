const college ={
    name: 'VNC',
    class: ['10','12'],
    events: ['science','bijoy dibosh','21 Feb'],
    unique:{
        color: 'blue',
        result:{
            gpa: 5,
            merit: 'top'
        }
    } 
}

// console.log(college.unique.color);
college.unique.result.merit = 'top top top most'
console.log(college.unique.result.merit)
college.events[1]= '16 th december'
console.log(college.events[1])
delete college.class;
console.log(college)