import React from "react";

type LayoutProps = {
  id?: string;
  children: JSX.Element | JSX.Element[];
};

const Layout = ({ children, id }: LayoutProps) => {
  return (
    <div id={id} className={`flex flex-col w-full h-full lg:w-2/5 px-6 md:px-12 lg:px-24 mx-auto`}>
      {children}
    </div>
  );
};

export default Layout;
