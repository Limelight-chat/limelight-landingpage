// Test script to check if the API route is working
// Run this with: node test-api.js

const testData = {
  name: "Test User",
  email: "test@example.com",
  issue: "This is a test issue to verify the API is working"
};

console.log("Testing Report Issue API...");
console.log("Sending data:", testData);

fetch("http://localhost:3000/api/report-issue", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(testData),
})
  .then(response => {
    console.log("Response status:", response.status);
    return response.json();
  })
  .then(data => {
    console.log("Response data:", data);
  })
  .catch(error => {
    console.error("Error:", error);
  });
