const express = require('express');
const app = express();
const cors = require('cors');
const bodyparser = require('body-parser');

app.use(cors());
app.use(bodyparser());

let users = [];
let stats = []

const questions = [
    // Day 1
    ["Print numbers from A to B", "Print sum of numbers from A to B", "Print Evens from A to B"],
    // Day 2
    ["Print sum of evens from A to B", "Print factorial of a Number", "Print factors of a number"],
    // Day 3
    ["Print sum of factors of a number", "Print count of factors", "Prime check"],
    // Day 4
    ["Prime check optimization (N/2)", "Prime check optimization II (Sqrt(N))", "Print prime numbers from A to B"],
    // Day 5
    ["Learn sieve of Eratosthenes", "Understand difference in while loop and for loop", "Print number of digits in a Number"],
    // Day 6
    ["Print sum of digits in a Number", "Print sum of even digits in a Number", "Print count of odd digits in a Number"],
    // Day 7
    ["Print 'Toxic' if Number has any prime digit", "Print reverse of a Number", "Check palindrome or not"],
    // Day 8
    ["Check if a number is perfect number or not", "Check if a number is Armstrong or not", "Check neon number"],
    // Day 9
    ["Count Number of Set Bits in a Number (using %)", "Count Number of Set Bits in a Number (using &)", "Count Number of Set Bits in a Number (using &) OPTIMAL"],
    // Day 10
    ["Count minimum number of bits to flip to make two numbers equal", "Print sum of array elements", "Print sum of even array elements"],
    // Day 11
    ["Count Maximum number of continuous Ones", "Maximum Profit from stock sell", "Double Pointer pattern question 1"],
    // Day 12
    ["2 Sum Variant question 1", "2 Sum Variant question 2", "2 Sum Variant question 3"],
    // Day 13
    ["2 Sum Variant question 4", "Next Permutation Variant question 1", "Next Permutation Variant question 2"],
    // Day 14
    ["Next Permutation Variant question 3", "Remove Element Variant question 1", "Move Zeroes (Leetcode)"],
    // Day 15
    ["Valid Palindrome", "Reverse String", "Reverse Vowels of a String"],
    // Day 16
    ["Valid Palindrome II", "Reverse Only Letters", "Remove Element"],
    // Day 17
    ["Sort Colors", "Flipping an Image", "Squares of a Sorted Array"],
    // Day 18
    ["Sort Array by Parity", "Sort Array by Parity II", "Pancake Sorting"],
    // Day 19
    ["Reverse Prefix of Word", "Reverse String II", "Reverse Words in a String"],
    // Day 20
    ["Reverse Words in a String III", "Binary Search Category 0, Question 1", "Binary Search Category 0, Question 2"],
    // Day 21
    ["Binary Search Category 0, Question 3", "Binary Search Category 0, Question 4", "Binary Search Category 0, Question 5"],
    // Day 22
    ["Binary Search Category 0, Question 6", "Binary Search Category 1, Question 1", "Binary Search Category 1, Question 2"],
    // Day 23
    ["Binary Search Category 1, Question 3", "Binary Search Category 1, Question 4", "Binary Search Category 2, Question 1"],
    // Day 24
    ["Binary Search Category 2, Question 2", "Binary Search Category 2, Question 3", "Binary Search Category 2, Question 4"],
    // Day 25
    ["Binary Search Category 3, Question 1", "Binary Search Category 3, Question 2", "Binary Search Category 3, Question 3"],
    // Day 26
    ["Hashmap - Contains Duplicate", "Find All Duplicates in an Array", "Sum of Unique Elements"],
    // Day 27
    ["Find the First Repeated Character", "Count frequency of every character in a string", "Check if two strings are anagram"],
    // Day 28
    ["First Unique Character in a String", "Word Pattern", "Intersection of Two Arrays"],
    // Day 29
    ["Find the Difference", "Two Sum (Leetcode)", "Check If N and Its Double Exist"],
    // Day 30
    ["Largest Subarray with 0 Sum", "Cumulative Sum", "Range Sum Query - Immutable"],
    // Day 31
    ["Subarray Sum Equals K", "Find Pivot Index", "Continuous Subarray Sum"],
    // Day 32
    ["Defuse the Bomb", "Range Sum of Sorted Subarray Sums", "Sliding Window - Sum of subarrays of size K"],
    // Day 33
    ["Sliding Window - Average of subarrays of size K", "Longest Substring Without Repeating Characters", "Maximum sum of subarray of size K"],
    // Day 34
    ["Minimum Size Subarray Sum", "Smallest subarray with a sum greater than X", "Max Consecutive Ones III"],
    // Day 35
    ["Sum of subarray minimums", "Next Greater Element", "Previous Greater Element"],
    // Day 36
    ["Next Smaller Element", "Previous Smaller Element", "Next Greater Element II"],
    // Day 37
    ["Stock Span Problem", "Daily Temperatures", "Buildings with an Ocean View"],
    // Day 38
    ["Find 132 Pattern", "Trapping Rain Water", "Largest Rectangle in Histogram"],
    // Day 39
    ["Number of Visible People in the Queue", "Sum of Subarray Minimum", "Sum of Subarray Ranges"],
    // Day 40
    ["Asteroid Collision", "Remove K Digits", "Maximal Rectangles"],
    // Day 41
    ["Sliding Window Maximum", "Top K Pattern - Kth Largest Number", "K Closest Points to Origin"],
    // Day 42
    ["Top K Frequent Elements", "Top K Frequent Words", "Ugly Number II"],
    // Day 43
    ["Frequency Sort", "Kth Largest Number in a Stream", "Reorganize String"],
    // Day 44
    ["Rearrange String K Distance Apart", "Kth Smallest Sum of a Matrix", "Merge K Sorted Arrays"],
    // Day 45
    ["K Pairs with the Smallest Sum", "K Smallest Numbers in M-Sorted Lists", "Two Heaps Pattern"],
    // Day 46
    ["Find Median from a Data Stream", "Sliding Window Median", "Maximize Capital/IPO"],
    // Day 47
    ["Minimum Cost to Connect Sticks", "Meeting Rooms II", "Employee Free Time"],
    // Day 48
    ["Minimum Cost to Hire K Workers", "Minimum Number of CPUs", "Minimum Refueling Stops"]
  ];
  


  
app.post("/getname",(req,res)=>{

    console.log("get name ",req.body);
    console.log("get name users currently",users);
    

    const name = users.filter((item)=>{
        return item.username==req.body.user;
    })

    console.log(name);

    res.json({name:name[0]})
})


app.post("/login",(req,res)=>{

    console.log("logging in ",req.body);

    const profile = users.filter((item)=>{
        return item.username==req.body.username && item.password == req.body.password;
    })

    console.log(profile);
    res.json({profile});

});


app.post("/activeday",(req,res)=>{

    console.log("72",req.body.user);
    const username = req.body.user;

    let day = 0;
    for(let i = 0;i<users.length;i++)
    {
        if(users[i].username==username)
        {
            console.log("79",users[i].active_day);
            day = users[i].active_day;
            console.log(day);
        }
    }
    
    res.json({active_day:day});

})


app.post("/getquestions",(req,res)=>{

    console.log("Welcome ",req.body)
        let active_day = req.body.active_day;
        console.log(active_day,"94");
        
        const que = questions[active_day];
        console.log({questions:que});
        
        res.json({questions:que,ok:true});
})

app.post('/register',(req,res)=>{
    console.log(req.body);
    const {name,username,password}  = req.body;
    users.push({name,username,password,rank:"Awaken Beast",date:'10/4/2024',active_day:0});
    console.log(users);
    res.json({name,username,password,rank:"Awaken Beast",date:'10/4/2024',active_day:0})
})

app.post("/increment",(req,res)=>{
    console.log("Incrementing")
    const username = req.body.username;
    console.log(username+" is this");
    
    for(let i = 0;i<users.length;i++)
    {
        if(users[i].username == username)
        {
            users[i].active_day+=1;
            break;
        }
    }
    console.log(users);
    res.json({ok:true});
})

app.listen(3001,()=>{
    console.log("Server wokring");
    
})