import React from "react";

import styles from "../styles/AboutSection.module.css";

interface AboutSectionProps {}

const AboutSection: React.FC<AboutSectionProps> = () => {
  return <section className={styles.container} id="impact"></section>;
};

export default AboutSection;
