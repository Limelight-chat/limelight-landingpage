// Debug script to test waitlist
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz8Lu3HiXdtdG3bxCvL-xs72KcVnwgUNVvYJSQe9k593YeMyMiihGBhXwb4ZVaqxcbThw/exec";

console.log("Testing Google Apps Script directly...\n");

const payload = {
  email: "test@example.com",
  timestamp: new Date().toISOString()
};

console.log("Payload:", JSON.stringify(payload, null, 2));
console.log("\nSending request...\n");

fetch(GOOGLE_SCRIPT_URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(payload)
})
  .then(async (response) => {
    console.log("Status:", response.status);
    console.log("Status Text:", response.statusText);
    
    const text = await response.text();
    console.log("\nRaw Response:");
    console.log(text);
    
    try {
      const data = JSON.parse(text);
      console.log("\nParsed Response:");
      console.log(JSON.stringify(data, null, 2));
      
      if (data.success) {
        console.log("\n✅ SUCCESS - Check your Google Sheet!");
      } else {
        console.log("\n❌ ERROR:", data.error);
      }
    } catch (e) {
      console.log("\n⚠️  Response is not JSON");
    }
  })
  .catch((error) => {
    console.log("\n❌ FETCH ERROR:");
    console.log(error.message);
  });
