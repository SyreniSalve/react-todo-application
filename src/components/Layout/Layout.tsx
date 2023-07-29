import React, { ReactNode } from "react";

import styles from "./Layout.module.css";

type LayoutProps = {
  header: ReactNode;
  children: ReactNode;
  footer: ReactNode;
};

const Layout = ({ header, children, footer }: LayoutProps): JSX.Element => (
  <>
    {header}
    <main className={styles.horizontalMargin}>{children}</main>
    {footer}
  </>
);

export default Layout;
