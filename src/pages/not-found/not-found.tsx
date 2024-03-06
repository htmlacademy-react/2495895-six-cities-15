import { Page } from '../../components/templates';
import { Footer, Header } from '../../components/organisms';

export const NotFound = () => (
  <Page className="page--main" header={<Header />} footer={<Footer />}>
    <main className="page--gray" style={{
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
    }}
    >
      <div className="container">
        <h1 style={{textAlign: 'center'}}>404. Page not found</h1>
      </div>
    </main>
  </Page>
);
