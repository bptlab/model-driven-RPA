import path from 'path';
import fs from 'fs'
let folderPath = '../database/error';


const POSSIBLE_REASONS = [
  "Color of element was changed", //0
  "Label of element was changed",//1
  "Position of element was changed",//2
  "Font of element was changed",//3
  "Image was changed",//4
  "Layout was changed",//5
  "Content of element was changed",//6
  "Styling of element was changed",//7
  "Language of element was changed",//8
  "Visibility of element was changed",//9
  "Type of element was changed",//10
  "Navigation was changed",//11
  "Input validation of element was changed",//12
  "Data format was changed",//13
  "New fields or elements were added",//14
  "Some fields or elements were removed",//15
  "Browser compatibility was changed",//16
  "Responsive design was changed"//17
]
/**
 * @swagger
 * /error-handling:
 *     parameters:
 *       - name: locator
 *         in: path
 *         description: locator that returns the error
 *         required: true
 *         content:
 *           application/json: 
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *               properties:
 *                   model_name:
 *                     type: string
 *                   page_name:
 *                     type: string
 *                   element_name:
 *                     type: string
 *                   locator:
 *                     type: string
 *     post:
 *       summary: Get the locator and writes in error.json all the possible reasons of failure.
 *       operationId: error-handling
 *       responses:
 *         200:
 *           description: error.json file created successfully
 *         500:
 *           description: Error writing to error.json
 */
export const errorHandling = (req, res) => {
  const error = req.body;
  const filePath = path.join(folderPath, "/", "error.json");
  let reasons = [];
  switch (error.locator) {
    case "id": reasons = [15,16].map(index => POSSIBLE_REASONS[index]); break;
    case "text": reasons = [1, 6, 8].map(index => POSSIBLE_REASONS[index]); break;
    case "tag": reasons = [10, 14, 15].map(index => POSSIBLE_REASONS[index]); break;
    case "path": reasons = [1, 6, 12, 13, 14, 15, 17].map(index => POSSIBLE_REASONS[index]); break;
    case "point": reasons = [2, 5, 9, 14, 15].map(index => POSSIBLE_REASONS[index]); break;
    case "region": reasons = [0, 1, 2, 3, 5, 6, 7, 8, 9, 11, 14, 15, 16, 17].map(index => POSSIBLE_REASONS[index]); break;
    case "image": reasons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 14, 15, 17].map(index => POSSIBLE_REASONS[index]); break;
    case "keyboard_shortcut": reasons = [11].map(index => POSSIBLE_REASONS[index]); break;
    default: reasons = [10, 12, 13, 15].map(index => POSSIBLE_REASONS[index]); break;
  }
  error.reasons_for_failure = reasons;

  // let uniqueErrors = [];
  // Remove duplicates from the errors array
  // errors.forEach((error) => {
  //   const isDuplicate = uniqueErrors.some((err) => {
  //     return (
  //       err.model_name === error.model_name &&
  //       err.page_name === error.page_name &&
  //       err.element_name === error.element_name &&
  //       err.locator === error.locator
  //     );
  //   });

  //   if (!isDuplicate) {
  //     uniqueErrors.push(error);
  //   }
  // });

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading error.json:", err);
      return res.status(500).json({ error: "Internal server error" });
    }

    let existingErrors = [];
    try {
      existingErrors = JSON.parse(data);
    } catch (parseErr) {
      console.error("Error parsing error.json:", parseErr);
      return res.status(500).json({ error: "Internal server error" });
    }

    const newError =  !existingErrors.some((existingError) => {
        return (
          existingError.model_name === error.model_name &&
          existingError.page_name === error.page_name &&
          existingError.element_name === error.element_name &&
          existingError.locator === error.locator
        );
      });

    if (!newError) {
      return res
        .status(200)
        .json({ message: "No new errors to add to error.json" });
    } else {
      existingErrors.push(error);
    }

    

    fs.writeFile(filePath, JSON.stringify(existingErrors), (writeErr) => {
      if (writeErr) {
        console.error("Error writing to error.json:", writeErr);
        return res.status(500).json({ error: "Internal server error" });
      }

      return res
        .status(200)
        .json({ message: "error.json file updated successfully" });
    });
  });
};
