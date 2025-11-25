import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    console.log("=== Waitlist API Called ===");
    const body = await request.json();
    const { email } = body;
    console.log("Received data:", { email });

    // Validate input
    if (!email) {
      console.log("Validation failed - missing email");
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SHEETS_WAITLIST_URL;
    console.log("Google Script URL configured:", !!GOOGLE_SCRIPT_URL);

    if (!GOOGLE_SCRIPT_URL) {
      console.error("Google Sheets URL not configured in environment variables");
      return NextResponse.json(
        { error: "Service not configured. Please contact support." },
        { status: 500 }
      );
    }

    const payload = {
      email,
      timestamp: new Date().toISOString(),
    };
    console.log("Sending to Google Sheets:", payload);

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    console.log("Google Sheets response status:", response.status);
    const responseText = await response.text();
    console.log("Google Sheets response:", responseText);

    if (!response.ok) {
      console.error("Google Sheets returned error:", response.status, responseText);
      throw new Error("Failed to submit to Google Sheets");
    }

    // Parse the response to check for success
    let responseData;
    try {
      responseData = JSON.parse(responseText);
    } catch {
      responseData = { success: true }; // If can't parse, assume success
    }

    // Check if Google Sheets script reported an error
    if (responseData.success === false) {
      console.error("Google Sheets script error:", responseData.error);
      throw new Error(responseData.error || "Failed to write to Google Sheets");
    }

    console.log("=== Success ===");
    return NextResponse.json(
      { message: "Successfully joined the waitlist" },
      { status: 200 }
    );
  } catch (error) {
    console.error("=== Error in API route ===");
    console.error("Error submitting to waitlist:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to join waitlist" },
      { status: 500 }
    );
  }
}
