import React from "react";
import { string, node } from "prop-types";

import styles from "./Section.module.scss";

function Section({ title, children }) {
  return (
    <section className={styles.section}>
      {title && <h1 className={styles.title}>{title}</h1>}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: string.isRequired,
  children: node,
};

export default Section;