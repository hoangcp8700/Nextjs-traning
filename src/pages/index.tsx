import { NextPageWithLayout } from "@/types/page";
import HomeContainer, { HomeContainerProps } from "@/containers/Home";
import Layout from "@/components/common/Layout";

const HomePage: NextPageWithLayout<HomeContainerProps> = () => <HomeContainer />;

export default HomePage;

HomePage.layout = Layout.Primary;
