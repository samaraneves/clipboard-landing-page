import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Image from '../components/Image';
import SectionContent from '../components/SectionContent';
import ArticleItem from '../components/ArticleItem';
import { imgComputer } from '../assets/index';
import { imgDevices } from '../assets/index';
import { iconBlacklist } from '../assets/index';
import { iconPreview } from '../assets/index';
import { iconText } from '../assets/index';
import '../components/global.css';


const Home = () => {
    return (
        <div>
        <Header/>
            <Main>
                <SectionContent 
                    title="A history of everything you copy" 
                    content="Clipboard allows you to track and organize everything
                    you copy. Instantly access your clipboard on all your devices."
                />
                <SectionContent 
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
            >
                <Image src={imgDevices} alt="Computer and Devices"/>
            </SectionContent>
            <SectionContent
            title="Supercharge your workflow"
            content="We've got the tools to boost your productivity.">

                <ArticleItem src={iconBlacklist}
                    alt="Blacklist icon"
                    title="Create blacklists"
                    text="Ensure sensitive information never makes its
                    way to your clipboard by excluding certain sources."
                />

                <ArticleItem src={iconText}
                    alt="Text Icon"
                    title="Plain text snippets"
                    text="Remove unwanted formatting from copied text for
                    consistent look."
                />
                <ArticleItem src={iconPreview}
                    alt="Eye icon"
                    title="Sneak preview"
                    text="Quick preview of all snippets on your
                    Clipboard for easy access."
                />
            </SectionContent>
            </Main>
        </div>
    )
}

export default Home;