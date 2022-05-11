import React from "react";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

// const printStars = (num) => {
//     let string = ''
//     while (num > 0) {
//       string += "⭐️";
//       num--;
//       if (num === 0.5) {
//         string+="✩";
//         num = num - 0.5
//       }
//     }
//     return string;
//   }

const printStars = (num) => {
  const totalStars = 5;
  let activeStars = num;

  return (
    <Box>
      {[...new Array(totalStars)].map((arr, index) => {
        return index < activeStars ? <StarIcon /> : <StarBorderIcon />;
      })}
    </Box>
  );
}

  export default printStars;