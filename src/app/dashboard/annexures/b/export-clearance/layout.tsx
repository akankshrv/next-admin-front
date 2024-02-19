import React, { ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            {/* Your layout code here */}
            hello this is export clearance layout
            {children}
        </div>
    );
};

export default Layout;