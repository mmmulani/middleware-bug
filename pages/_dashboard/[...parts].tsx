import type { NextPage } from 'next'
import { useRouter } from 'next/router';

const PartsPage: NextPage = () => {
  const router = useRouter();
  const { parts } = router.query;
  return <div>Parts page</div>;
};
PartsPage.getInitialProps = () => {
  return {};
};

export default PartsPage;
