let solve = {};

// solve.addtwonumber = async (req, res) => {
//   try {
//     let array = [1, 3, 5, 6];
//     let newarray = 6;

//     function addtwosum() {
//       let sum = {};
//       for (let i = 0; i < array.length; i++) {
//         if (i + newarray === 6) {
//           console.log("success");
//         }
//       }

//       res.send("sumdata", sum);
//     }
//     addtwosum()
//   } catch (err) {
//     console.log("err", err);
//     res.send("error", err);
//   }
// };

solve.addtwonumber = (req, res) => {
    try {
      const array = [1, 3, 5, 6];
      const target = 6;
      const result = twoSum(array, target);
  
      if (result.length > 0) {
        res.json({ success: true, indices: result });
      } else {
        res.json({ success: false, message: "No two numbers add up to the target." });
      }
    } catch (err) {
      console.error("Error:", err);
      res.status(500).json({ success: false, error: err.message });
    }
  };

  function twoSum(nums, target) {
    const numToIndex = {}; 
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (numToIndex.hasOwnProperty(complement)) {
        return [numToIndex[complement], i];
      }
      numToIndex[nums[i]] = i;
    }
  
    return []; 
  }


module.exports = solve;
