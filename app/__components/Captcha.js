import { ReCAPTCHA } from "react-google-recaptcha";

export default function Captcha({ onChange }) {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  return (
    <ReCAPTCHA onChange={onChange} siteKey={siteKey} className="w-full bg-green-400"/>
  )
}
