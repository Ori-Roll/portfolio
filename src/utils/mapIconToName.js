import React from "react";

import { ReactComponent as EmailIcon } from "../assets/email.svg";
import { ReactComponent as PhoneIcon } from "../assets/phone.svg";
import { ReactComponent as PortfolioIcon } from "../assets/portfolio.svg";
import { ReactComponent as LinkedinCleanIcon } from "../assets/linkedin_clean.svg";
import { ReactComponent as LinkedinBlackIcon } from "../assets/linkedin_black.svg";
import { ReactComponent as GithubIcon } from "../assets/github.svg";

export const iconNames = Object.freeze({
  email: "EMAIL_ICON",
  phone: "PHONE_ICON",
  portfolio: "PORTFOLIO_ICON",
  linkedin: "LINKEDIN_ICON",
  github: "GITHUB_ICON",
});

export const iconsMap = new Map([
  [iconNames.email, EmailIcon],
  [iconNames.phone, PhoneIcon],
  [iconNames.portfolio, PortfolioIcon],
  [iconNames.linkedin, LinkedinCleanIcon],
  [iconNames.github, GithubIcon],
]);
