// Test script for report-issue API
const testData = {
  name: "Test User",
  email: "test@example.com",
  issue: "This is a test issue to verify the API is working"
};

fetch('http://localhost:3000/api/report-issue', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(testData)
})
  .then(res => res.json())
  .then(data => console.log('Success:', data))
  .catch(err => console.error('Error:', err));
