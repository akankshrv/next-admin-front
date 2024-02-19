import React from 'react';
import CustomTabsForAnnexureB from './_components/CustomTabsForAnnexureB';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
           <CustomTabsForAnnexureB />
            
                {children}
            
        </div>
    );
};

export default Layout;