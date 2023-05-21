import Header from "../Header/header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <Header />
      <div className="layout__content">{children}</div>
    </div>
  );
};

export default Layout;
