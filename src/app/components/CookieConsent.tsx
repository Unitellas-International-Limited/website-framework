"use client";

import {CookieConsent} from "react-cookie-consent";

export default function CookieBanner() {
  return (
  <CookieConsent
  location="bottom"
  buttonText="Accept All"
  declineButtonText="Decline"
  enableDeclineButton
  cookieName="unitellas-consent-v1"
  style={{ background: "#fff", color: "#333", boxShadow: "0 -2px 10px rgba(0,0,0,0.1)" }}
  buttonStyle={{ background: "#3caaee", color: "#fff", fontSize: "13px", borderRadius: "4px", padding: "8px 16px" }}
  declineButtonStyle={{ background: "transparent", color: "#333", border: "1px solid #333", fontSize: "13px", borderRadius: "4px" }}
  contentStyle={{ color: "#333", fontSize: "14px" }}
  expires={150}
  sameSite="strict"
  overlay
>
  This website uses cookies for analytics and to improve your experience.
</CookieConsent>
  );
}

