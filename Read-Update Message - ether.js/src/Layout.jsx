import { Outlet, Link } from 'react-router-dom';

function Layout() {
    return (
        <>
            <nav style={{ padding: '10px', backgroundColor: '#eee' }}>
                <Link to="/">الرئيسية</Link> | {" "}
                <Link to="/about">معلومات عنا</Link> | {" "}
                <Link to="/contact">تواصل</Link>
            </nav>

            <main style={{ minHeight: '80vh', padding: '20px' }}>

                <Outlet /> {/* هنا يتم عرض الصفحة حسب المسار */}

            </main>

            <footer style={{ backgroundColor: '#eee', textAlign: 'center', padding: '10px' }}>
                &copy; 2025 جميع الحقوق محفوظة
            </footer>
        </>
    );
}

export default Layout;
