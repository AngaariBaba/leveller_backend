const express = require('express');
const app = express();
const cors = require('cors');
const bodyparser = require('body-parser');

const mongoose = require('mongoose');

// Replace 'yourMongoDBURI' with your actual MongoDB connection string
const pass = encodeURIComponent('Navya#1427');
mongoose.connect(`mongodb+srv://trickerbaby:${pass}@cluster0.rq5ucba.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log("Error connecting to MongoDB: ", err));


const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  active_day: { type: Number, default: 0 },
  name: {type: String, required: true},
  last_solve: {type: Number,required: true}
});

const User = mongoose.model('User', userSchema);

const StatsSchema = new mongoose.Schema({
  username: {type:String,required:true},
  rank: {type:String,required:true},
  rage: {type:Number,required:true},
  streak: {type:Number,required:true},
});

const Stats = mongoose.model('Stats',StatsSchema);


app.use(cors());
app.use(bodyparser.json());



const questions = [
    [
      { name: "Print Hello World", link: "https://www.programiz.com/java-programming/online-compiler/",topic:"For-Loop" },
      { name: "Print Hello World N Times", link: "https://www.programiz.com/online-compiler/5WvvXlbFP3chc",topic:"For-Loop" },
      { name: "Print numbers from A to B", link: "https://www.programiz.com/online-compiler/5WvvXlbFP3chc",topic:"For-Loop" }
    ],
    [
      { name: "Print sum of numbers from A to B", link: "https://www.programiz.com/online-compiler/5FWW44o6W9chD",topic:"For-Loop" },
      { name: "Print Evens from A to B", link: "https://www.programiz.com/java-programming/online-compiler/",topic:"For-Loop" },
      { name: "Print sum of evens from A to B", link: "https://www.programiz.com/java-programming/online-compiler/",topic:"For-Loop" }
    ],
    [
      { name: "Print factorial of a number", link: "https://www.programiz.com/java-programming/online-compiler/",topic:"For-Loop" },
      { name: "Print factors of a number", link: "https://www.programiz.com/java-programming/online-compiler/",topic:"For-Loop" },
      { name: "Print sum of factors of a number", link: "https://www.programiz.com/java-programming/online-compiler/",topic:"For-Loop"}
    ],
    [
      { name: "Print count of factors", link: "https://www.programiz.com/java-programming/online-compiler/",topic:"For-Loop" },
      { name: "Prime check", link: "https://www.programiz.com/java-programming/online-compiler/" ,topic:"For-Loop"},
      { name: "Prime check optimization (N/2)", link: "https://www.programiz.com/java-programming/online-compiler/",topic:"For-Loop" }
    ],
    [
      { name: "Prime check optimization II (Sqrt(N))", link: "https://www.programiz.com/java-programming/online-compiler/",topic:"For-Loop" },
      { name: "Print prime numbers from A to B", link: "https://www.programiz.com/java-programming/online-compiler/" ,topic:"For-Loop"},
      { name: "Sieve of Eratosthenes", link: "https://www.programiz.com/java-programming/online-compiler/",topic:"For-Loop" }
    ],
    [
      { name: "Print number of digits in a number", link: "https://www.programiz.com/java-programming/online-compiler/",topic:"While-Loop" },
      { name: "Print sum of digits in a number", link: "https://www.programiz.com/java-programming/online-compiler/",topic:"While-Loop" },
      { name: "Print sum of even digits in a number", link: "https://www.programiz.com/java-programming/online-compiler/",topic:"While-Loop" }
    ],
    [
      { name: "Print count of odd digits in a number", link: "https://www.programiz.com/java-programming/online-compiler/" ,topic:"While-Loop"},
      { name: "Print 'Toxic' if the number has any prime digit", link: "https://www.programiz.com/java-programming/online-compiler/" ,topic:"While-Loop"},
      { name: "Print reverse of a number", link: "https://www.programiz.com/java-programming/online-compiler/",topic:"While-Loop" }
    ],
    [
      { name: "Check palindrome or not", link: "https://www.programiz.com/java-programming/online-compiler/" ,topic:"While-Loop"},
      { name: "Check if a number is a perfect number", link: "https://www.programiz.com/java-programming/online-compiler/" ,topic:"While-Loop"},
      { name: "Check if a number is armstrong", link: "https://www.programiz.com/java-programming/online-compiler/" ,topic:"While-Loop"},
      { name: "Check neon number", link: "https://www.programiz.com/java-programming/online-compiler/" ,topic:"While-Loop"}
    ],
    [ 
      { name: "Print sum of array elements", link: "https://www.programiz.com/java-programming/online-compiler/",topic:"Array-1D Scan" },
      { name: "Print sum of even array elements", link: "https://www.programiz.com/java-programming/online-compiler/",topic:"Array-1D Scan" }
    ],
    [
      { name: "Count maximum number of continuous ones", link: "https://www.programiz.com/java-programming/online-compiler/" ,topic:"Array-1D Scan"},
      { name: "Maximum profit from stock sell", link: "https://www.programiz.com/java-programming/online-compiler/" ,topic:"Array-1D Scan"},
      { name: "Reverse an Array", link: "https://www.geeksforgeeks.org/problems/reverse-an-array/0",topic:"Array-1D Scan" }
    ],
    [
      { name: "Two Sum II", link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",topic:"Double Pointer" },
      { name: "3Sum", link: "https://leetcode.com/problems/3sum/" ,topic:"Double Pointer"},
      { name: "Number of Subsequences That Satisfy the Given Sum Condition", link: "https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/",topic:"Double Pointer" }
    ],
    [
      { name: "Two Sum IV (BST)", link: "https://leetcode.com/problems/two-sum-iv-input-is-a-bst/" ,topic:"Double Pointer - 2 Sum Pattern"},
      { name: "Sum of Square Numbers", link: "https://leetcode.com/problems/sum-of-square-numbers/",topic:"Double Pointer - 2 Sum Pattern" },
      { name: "Boats to Save People", link: "https://leetcode.com/problems/boats-to-save-people/",topic:"Double Pointer - 2 Sum Pattern" }
    ],
    [
      { name: "Minimize Maximum Pair Sum in Array", link: "https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/",topic:"Double Pointer" },
      { name: "Next Permutation", link: "https://leetcode.com/problems/next-permutation/" ,topic:"Double Pointer - Next Permutation"},
      { name: "Next Greater Element III", link: "https://leetcode.com/problems/next-greater-element-iii/",topic:"Double Pointer - Next Permutation" },
      { name: "Minimum Adjacent Swaps to Reach Kth Smallest Number", link: "https://leetcode.com/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number/",topic:"Double Pointer - Next Permutation" }
    ],
    [
      { name: "Find Smallest Letter Greater Than Target", link: "https://leetcode.com/problems/find-smallest-letter-greater-than-target/" ,topic:"Binary Search"},
      { name: "Missing Element in Sorted Array", link: "https://leetcode.com/problems/missing-element-in-sorted-array/",topic:"Binary Search" }
    ],
    [
      { name: "Peak Index in a Mountain Array", link: "https://leetcode.com/problems/peak-index-in-a-mountain-array/",topic:"Binary Search"},
      { name: "H-Index II", link: "https://leetcode.com/problems/h-index-ii/" ,topic:"Binary Search"},
      { name: "Find First and Last Position of Element in Sorted Array", link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/" ,topic:"Binary Searh"}
    ],
    [
      { name: "First Bad Version", link: "https://leetcode.com/problems/first-bad-version/",topic:"Binary Search on Answers" },
      { name: "Minimum Number of Days to Make M Bouquets", link: "https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/",topic:"Binary Search on Answers" },
      { name: "Sum of Mutated Array Closest to Target", link: "https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/",topic:"Binary Search on Answers" }
    ],
    [
        { name: "Find the Smallest Divisor Given a Threshold", link: "https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/" ,topic:"Binary Search on Answers"},
        { name: "Koko Eating Bananas", link: "https://leetcode.com/problems/koko-eating-bananas/" ,topic:"Binary Search on Answers"},
        { name: "Capacity to Ship Packages Within D Days", link: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/",topic:"Binary Search on Answers" }
      ],
      [
        { name: "Find Peak Element", link: "https://leetcode.com/problems/find-peak-element/",topic:"Binary Search On Unsorted!" },
        { name: "Find Minimum in Rotated Sorted Array", link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",topic:"Binary Search - Hard to Decide" },
        { name: "Search in Rotated Sorted Array", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/" ,topic:"Binary Search - Hard to Decide"}
      ],
      [
        { name: "Time-Based Key-Value Store", link: "https://leetcode.com/problems/time-based-key-value-store/",topic:"Binary Search - Final Category" },
        { name: "Online Election", link: "https://leetcode.com/problems/online-election/" ,topic:"Binary Search - Final Category"},
        { name: "Random Pick with Weight", link: "https://leetcode.com/problems/random-pick-with-weight/" ,topic:"Binary Search - Final Category"}
      ],
      [
        { name: "Find Right Interval", link: "https://leetcode.com/problems/find-right-interval/",topic:"Binary Search - Final Category" },
        { name: "Median of Two Sorted Arrays", link: "https://leetcode.com/problems/median-of-two-sorted-arrays/",topic:"Binary Search - Final Category" },
        
      ],
      [
        { name: "Contains Duplicate", link: "https://www.programiz.com/java-programming/online-compiler/",topic:"The HashMap" },
        { name: "Find All Duplicates in an Array", link: "https://www.programiz.com/java-programming/online-compiler/" },
        { name: "Sum of Unique Elements", link: "https://www.programiz.com/java-programming/online-compiler/" },
        { name: "Find the First Repeated Character (GFG)", link: "https://www.programiz.com/java-programming/online-compiler/" }
      ],
      [
        { name: "Count Frequency of Every Character in a String", link: "https://www.programiz.com/java-programming/online-compiler/" },
        { name: "Check if Two Strings Are Anagrams", link: "https://www.programiz.com/java-programming/online-compiler/" },
        { name: "First Unique Character in a String", link: "https://leetcode.com/problems/first-unique-character-in-a-string/" }
      ],
      [
        { name: "Word Pattern", link: "https://leetcode.com/problems/word-pattern/" },
        { name: "Intersection of Two Arrays", link: "https://www.programiz.com/java-programming/online-compiler/" },
        { name: "Find the Difference", link: "https://leetcode.com/problems/find-the-difference/" }
      ],
      [
        { name: "Two Sum", link: "https://leetcode.com/problems/two-sum/" },
        { name: "Check if N and Its Double Exist", link: "https://leetcode.com/problems/check-if-n-and-its-double-exist/" },
        { name: "Largest Subarray with 0 Sum", link: "https://www.programiz.com/java-programming/online-compiler/" }
      ],
      [
        { name: "Cumulative Sum", link: "https://www.programiz.com/java-programming/online-compiler/", topic:"The prefixSum" },
        { name: "Range Sum Query - Immutable", link: "https://www.programiz.com/java-programming/online-compiler/" },
        { name: "Subarray Sum Equals K", link: "https://leetcode.com/problems/subarray-sum-equals-k/" }
      ],
      [
        { name: "Find Pivot Index", link: "https://www.programiz.com/java-programming/online-compiler/" , topic:"The prefixSum"},
        { name: "Continuous Subarray Sum", link: "https://leetcode.com/problems/continuous-subarray-sum/" },
        { name: "Defuse the Bomb", link: "https://leetcode.com/problems/defuse-the-bomb/" },
        { name: "Range Sum of Sorted Subarray Sums", link: "https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/", topic:"The prefixSum" }
      ],
      [
       
        { name: "Sum of Subarrays of Size K", link: "https://www.programiz.com/java-programming/online-compiler/" ,topic:"Sliding Window"},
        { name: "Average of Subarrays of Size K", link: "https://www.programiz.com/java-programming/online-compiler/" }
      ],
      [
        { name: "Longest Substring Without Repeating Characters", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",topic:"Sliding Window" },
        { name: "Maximum Sum of Subarray of Size K", link: "https://www.programiz.com/java-programming/online-compiler/" },
        { name: "Minimum Size Subarray Sum", link: "https://leetcode.com/problems/minimum-size-subarray-sum/" }
      ],
      [
        { name: "Smallest Subarray with a Sum Greater than X", link: "https://www.programiz.com/java-programming/online-compiler/" ,topic:"Sliding Window"},
        { name: "Max Consecutive Ones III", link: "https://leetcode.com/problems/max-consecutive-ones-iii/" },
        { name: "Sum of Subarray Minimums", link: "https://leetcode.com/problems/sum-of-subarray-minimums/" }
      ],
      [
        { name: "Next Greater Element", link: "https://www.programiz.com/java-programming/online-compiler/",Topic :"Monotonic Stack Arena" },
        { name: "Previous Greater Element", link: "https://www.programiz.com/java-programming/online-compiler/" },
        { name: "Next Smaller Element", link: "https://www.programiz.com/java-programming/online-compiler/" }
      ],
      [
        { name: "Previous Smaller Element", link: "https://www.programiz.com/java-programming/online-compiler/",Topic :"Monotonic Stack Arena" },
        { name: "Next Greater Element II", link: "https://leetcode.com/problems/next-greater-element-ii/" },
        { name: "Stock Span Problem", link: "https://www.programiz.com/java-programming/online-compiler/" }
      ],
      [
        { name: "Daily Temperatures", link: "https://leetcode.com/problems/daily-temperatures/" ,Topic :"Monotonic Stack Arena"},
        { name: "Buildings with an Ocean View", link: "https://leetcode.com/problems/buildings-with-an-ocean-view/" },
        { name: "Find 132 Pattern", link: "https://www.programiz.com/java-programming/online-compiler/" }
      ],
      [
        { name: "Trapping Rain Water", link: "https://leetcode.com/problems/trapping-rain-water/",Topic :"Monotonic Stack Arena" },
        { name: "Largest Rectangle in Histogram", link: "https://leetcode.com/problems/largest-rectangle-in-histogram/" },
        { name: "Number of Visible People in the Queue", link: "https://leetcode.com/problems/number-of-visible-people-in-a-queue/" }
      ],
      [
        { name: "Asteroid Collision", link: "https://leetcode.com/problems/asteroid-collision/" ,Topic :"Monotonic Stack Arena"},
        { name: "Remove K Digits", link: "https://leetcode.com/problems/remove-k-digits/" },
        { name: "Maximal Rectangles", link: "https://www.programiz.com/java-programming/online-compiler/" },
        { name: "Sliding Window Maximum", link: "https://leetcode.com/problems/sliding-window-maximum/" ,Topic :"Monotonic Stack Arena"}
      ],
      [
       
        { name: "Kth Largest Number in an Array", link: "https://leetcode.com/problems/kth-largest-element-in-an-array/" , topic:"Heap War -  Top K" },
        { name: "K Closest Points to Origin", link: "https://leetcode.com/problems/k-closest-points-to-origin/" }
      ],
      [
        { name: "Top K Frequent Elements", link: "https://leetcode.com/problems/top-k-frequent-elements/" ,topic:"Heap War"},
        { name: "Top K Frequent Words", link: "https://leetcode.com/problems/top-k-frequent-words/" },
        { name: "Ugly Number II", link: "https://leetcode.com/problems/ugly-number-ii/" }
      ],
      [
        { name: "Frequency Sort", link: "https://leetcode.com/problems/frequency-sort/",topic:"Heap War" },
        { name: "Kth Largest Number in a Stream", link: "https://leetcode.com/problems/kth-largest-element-in-a-stream/" ,topic:"Heap War"},
        { name: "Reorganize String", link: "https://leetcode.com/problems/reorganize-string/" }
      ],
      [
        { name: "Rearrange String K Distance Apart", link: "https://leetcode.com/problems/rearrange-string-k-distance-apart/",topic:"Heap War" },
        { name: "Kth Smallest Sum of a Matrix with Sorted Rows", link: "https://leetcode.com/problems/kth-smallest-sum-of-a-matrix-with-sorted-rows/" ,topic:"Heap War"}

      ],
      [
        { name: "Merge K Sorted Lists", link: "https://leetcode.com/problems/merge-k-sorted-lists/",topic:"Heap War - Merge K sorted" },
        { name: "K Pairs with the Smallest Sum", link: "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/" ,topic:"Heap War"},
        { name: "K Smallest Numbers in M Sorted Lists", link: "https://www.programiz.com/java-programming/online-compiler/" },
       
      ],
      [
        { name: "Find Median from Data Stream", link: "https://leetcode.com/problems/find-median-from-data-stream/" ,topic:"HeapWar - 2 Heaps"},
        { name: "Maximum Frequency Stack", link: "https://leetcode.com/problems/maximum-frequency-stack/",topic:"Heap War" },
        { name: "Sort Characters by Frequency", link: "https://leetcode.com/problems/sort-characters-by-frequency/" },
        { name: "Task Scheduler", link: "https://leetcode.com/problems/task-scheduler/" }
      ] // (Continue in this format for the rest of the questions)
  ];
      



  app.post("/getstats",async (req,res)=>{

      const username = req.body.user;
      let rank = 'UnRanked';
      let streak = 0;
      let rage = 0;

      const userStat = await Stats.findOne({username});

      rank = userStat.rank;
      streak = userStat.streak;
      rage = userStat.rage;

      res.json({streak,rank,rage});
  });


  app.post('/getdetails',async (req,res)=>{
    console.log("Fetching details...");
    let rage = 0;
    let streak = 0;
    //Find out the user name in state
    //take rage and streak...
    
     const data = await Stats.findOne({username:req.body.user});
     console.log("280 ",data);
     if(!data)
     {
      return;
     }
     rage = data.rage;
     streak = data.streak;

    res.json({rage,streak});
  })




  app.post("/setrank",async (req,res)=>{
    console.log("setting rank");
    
    console.log(req.body);
    const user = req.body.user;

    const profile = await Stats.findOne({username:user});
    profile.rank = req.body.rank;
    console.log(profile);
    profile.save();
    res.json({ok:true});

  })
  
app.post("/getname",async (req,res)=>{

    console.log("get name ",req.body);

    const profile = await User.findOne({username:req.body.user});

    console.log(profile.name);

    res.json({name:profile.name});
})


app.post("/login",async (req,res)=>{

  console.log("317 logging in ",req.body);


  const profile = await User.findOne({username:req.body.username,password:req.body.password});

  console.log(profile);
  res.json({profile});

});


app.post("/activeday",async (req,res)=>{

    console.log("72",req.body.user);
    console.log("getting active day for ",req.body)
    const username = req.body.user;

    console.log(username);
    if(!username)
    {
      return;
    }
    

    let day = 0;
    const profile = await User.findOne({username});
    console.log(profile);

    day = profile.active_day;
    
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

app.post('/register', async (req,res)=>{
    console.log(req.body);
    const {name,username,password}  = req.body;

    const timestamp = Date.now();

    const already = await User.findOne({username});

    if(already)
    {
      res.json({error:"User already exists.."});
      return;
    }

    const newuser = new User({username,name,password,rank:"Awaken Beast",active_day:0,last_solve:timestamp});
    await newuser.save();

    const newStat = new Stats({username,rank:"Awaken Beast",rage:100,streak:1});
    await newStat.save();


    console.log("new register ",newuser);
    console.log("new register stats registered");
    res.json({name,username,password,rank:"Awaken Beast",date:'10/4/2024',active_day:0})
})


app.post("/increment",async (req,res)=>{
    console.log("Incrementing")
    const username = req.body.username;
    console.log(username+" is this");

    const timestamp = Date.now();
    
    const profile = await User.findOne({username});
    
    if(!profile)
    {
      return;
    }

    const user_last_solve = profile.last_solve;
    profile.active_day+=1;

    const userStat = await Stats.findOne({username});
    console.log("405",userStat);
    console.log(req.body.username,"",user_last_solve);
    console.log(req.body.username,"",timestamp);
    console.log("differecne = ",Math.abs(user_last_solve - timestamp));
    console.log("setting current timestamp = ",timestamp);
    
          if(Math.abs(user_last_solve - timestamp) <= 86400000)
          {
            
            profile.last_solve = timestamp;
            userStat.streak+=1;

            if(userStat.rage!=100)
            {
              userStat.rage+=10;
            }
          }
          else
          {
            userStat.streak = 1;
            userStat.rage-=10
            profile.last_solve = timestamp;
          }
          profile.last_solve = timestamp;
          console.log("new current timestamp = ",profile.last_solve);
          userStat.save();
          profile.save();

    res.json({ok:true});
})

app.get("/",(req,res)=>{
  res.send("Wrokng");
})

app.listen(3001,()=>{
    console.log("Server wokring");
    
})