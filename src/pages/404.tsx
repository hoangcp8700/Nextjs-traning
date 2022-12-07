import Layout from "@/components/common/Layout";
import SEO from "@/components/common/SEO";
import { NextPageWithLayout } from "@/types/page";

const Custom404: NextPageWithLayout = () => (
  <div className='p-error'>
    <SEO
      title='Error Page'
      description='Error page Lorem'
      keyword='Error Error Error'
      imgSrc='https://source.unsplash.com/random'
    />
    <p>404 error</p>
  </div>
);

export default Custom404;

Custom404.layout = Layout.Primary;
