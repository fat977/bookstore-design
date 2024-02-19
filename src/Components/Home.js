import { Content } from '../Components/Content/Content';
import { LatestPublished } from '../Components/Latest-Published/LatestPuplished';
import { Sale } from '../Components/Sale/Sale';
import { Service } from '../Components/Services/Service';
import { Newsletter } from '../Components/Newsletter/Newsletter';

import {Header} from '../Components/Header/header';
export const Home = () =>{
    return (
        <>
            <Header />
            <Content />
            <LatestPublished/>
            <Sale/>
            <Service/>
            <Newsletter/>
        </>
    );
}