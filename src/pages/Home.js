import React from 'react';

import Header from '../components/Header';
import Main from '../components/Main';
import Image from '../components/Image';
import Button from '../components/Button';
import SectionContent from '../components/SectionContent';
import ArticleItem from '../components/ArticleItem';
import Footer from '../components/Footer';

import { imgComputer } from '../assets/index';
import { imgDevices } from '../assets/index';
import { iconBlacklist } from '../assets/index';
import { iconPreview } from '../assets/index';
import { iconText } from '../assets/index';
import { logoGoogle } from '../assets/index';
import { logoIBM } from '../assets/index';
import { logoMicrosoft } from '../assets/index';
import { logoHP } from '../assets/index';
import { logoVectorGraphics } from '../assets/index';

import '../components/global.css';


const Home = () => {
    return (
        <div>
        <Header/>
            <Main>
                <SectionContent 
                    classe="clipboard__section-presentation"
                    title="A history of everything you copy" 
                    content="Clipboard allows you to track and organize everything
                    you copy. Instantly access your clipboard on all your devices."
                >
                    <Button 
                        prefixClass="iOS"
                        text="Download for iOS"
                    />
                    <Button 
                        prefixClass="Mac"
                        text="Download for Mac"
                    />
                </SectionContent>
                <SectionContent 
                    classe="clipboard__section-snippets"
                    title="Keep track of your snippets" 
                    content="Clipboard instantly stores any item you copy in the cloud,
                    meaning you can access your snippets immediately on all your devices.
                    Our Mac and iOS apps will help you organize everything.">
                    <Image src={imgComputer} alt="Computer and benefits"/>
                    <ArticleItem
                        title="Quick Search"
                        text="Easily search your snippets by content,
                        category, web address, application, and more."
                    />
                    <ArticleItem
                        title="iCloud Sync"
                        text="Instantly saves and syncs snippets
                        across all your devices."
                    />
                    <ArticleItem
                        title="Complete History"
                        text="Retrieve any snippets from the firts moment
                        you started using the app."
                    />
                </SectionContent>
            <SectionContent 
                title="Access Clipboard Anywhere"
                content="Wheter you're on the go, or at your computer,
                you can access all your Clipboard snippets in a few simple clicks."
                classe="clipboard__section-acess"
            >
                <Image src={imgDevices} alt="Computer and Devices"/>
            </SectionContent>
            <SectionContent
            title="Supercharge your workflow"
            content="We've got the tools to boost your productivity."
            classe="clipboard__section-workflow"
            >

                <ArticleItem 
                    image={iconBlacklist}
                    alt="Blacklist icon"
                    title="Create blacklists"
                    text="Ensure sensitive information never makes its
                    way to your clipboard by excluding certain sources."
                />

                <ArticleItem 
                    image={iconText}
                    alt="Text Icon"
                    title="Plain text snippets"
                    text="Remove unwanted formatting from copied text for
                    consistent look."
                />
                <ArticleItem 
                    image={iconPreview}
                    alt="Eye icon"
                    title="Sneak preview"
                    text="Quick preview of all snippets on your
                    Clipboard for easy access."
                />
                <SectionContent classe="clipboard__section-customers">
                    <Image classe="clipboard__customers-image" src={logoGoogle} alt="Google logo"/>
                    <Image classe="clipboard__customers-image" src={logoIBM} alt="IBM logo"/>
                    <Image classe="clipboard__customers-image" src={logoMicrosoft} alt="Microsoft logo"/>
                    <Image classe="clipboard__customers-image" src={logoHP} alt="HP logo"/>
                    <Image classe="clipboard__customers-image" src={logoVectorGraphics} alt="Vector Graphics logo"/>
                </SectionContent>
            </SectionContent>
            <SectionContent 
                title="Clipboard for iOS and Mac OS"
                content="Available for free on the App Store. 
                Download for Mac or iOS, sync with iCloud and you're ready to start adding
                to your clipboard."
                classe="clipboard__section-compatibility">
                <Button 
                    prefixClass="iOS"
                    text="Download for iOS"
                />
                <Button 
                    prefixClass="Mac"
                    text="Download for Mac"
                />
            </SectionContent>
            </Main>
            <Footer/>
        </div>
    )
}

export default Home;