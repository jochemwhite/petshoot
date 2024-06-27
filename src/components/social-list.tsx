import React from "react";
import SocialButton from "./social-button";

export default function SocialLlist() {
  return (
    <ul className="flex mt-4 *:mr-2 *:h-10 *:w-10">
      <li>
        <SocialButton provider="facebook" />
      </li>
      <li>
        <SocialButton provider="twitter" />
      </li>
      <li>
        <SocialButton provider="pinterest" />
      </li>
      <li>
        <SocialButton provider="instagram" />
      </li>
      <li>
        <SocialButton provider="linkedin" />
      </li>
    </ul>
  );
}
