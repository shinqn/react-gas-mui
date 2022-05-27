import Router from './routes';

import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';

// theme
import ThemeProvider from './theme';

function App() {
    return (
        <ThemeProvider>
            <ScrollToTop />
            <BaseOptionChartStyle />
            <Router />
        </ThemeProvider>
    );
}

export default App;
