'use client';

import { useState } from 'react'; // Import useState
import { Section, Cell, Image, List, Button, Text, Avatar } from '@telegram-apps/telegram-ui'; // Import Modal


import { Link } from '@/components/Link/Link';

import tonSvg from './_assets/ton.svg';

import { hapticFeedback } from '@telegram-apps/sdk';

console.log(hapticFeedback.isSupported());

export default function Home() {
    // State to control modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to handle the button click
    const handleButtonClick = () => {
        hapticFeedback.impactOccurred('medium');
    };



    return (
        <>
            <List>
                <Section
                    header='Features'
                    footer='You can use these pages to learn more about features, provided by Telegram Mini Apps and other useful projects'
                >
                    <Link href='/ton-connect'>
                        <Cell
                            before={<Image src={tonSvg.src} style={{ backgroundColor: '#007AFF' }}/>}
                            subtitle='Connect your TON wallet'
                        >
                            TON Connect
                        </Cell>
                    </Link>
                </Section>
                <Section
                    header='Application Launch Data'
                    footer='These pages help developer to learn more about current launch information'
                >
                    <Link href='/init-data'>
                        <Cell subtitle='User data, chat information, technical data'>Init Data</Cell>
                    </Link>
                    <Link href='/launch-params'>
                        <Cell subtitle='Platform identifier, Mini Apps version, etc.'>Launch Parameters</Cell>
                    </Link>
                    <Link href='/theme-params'>
                        <Cell subtitle='Telegram application palette information'>Theme Parameters</Cell>
                    </Link>
                </Section>
                {/* Button to trigger popup */}
                <Button style={{ margin: 10 }} onClick={handleButtonClick}>
                    Test
                </Button>
                <Avatar/>
            </List>


        </>
    );
}
