import React from 'react'
import {
    FacebookIcon,
    FacebookShareButton,
    FacebookMessengerIcon,
    FacebookMessengerShareButton,
    TelegramShareButton,
    TelegramIcon,
    LinkedinShareButton,
    LinkedinIcon,
    WhatsappShareButton, WhatsappIcon, TwitterShareButton, TwitterIcon
} from "react-share";
import {SHARE_LINK_BLOG,SHARE_LINK_PORTFOLIO} from "./params";

const ShareButtons = (props) => {
    const slug = props.slug
    const title = props.title
    let urlTo = ""
    const twitterHashtag = ['#HassanPIOU']


    if (props.type == 'blog'){
        urlTo = SHARE_LINK_BLOG+slug
    }else{
        urlTo = SHARE_LINK_PORTFOLIO+slug
    }

    return (
        <ul className="shareGroup">

            {/*Telegram*/}
            <li>
                <TelegramShareButton
                title={title}
                url={urlTo}
                >
                    <TelegramIcon size={36} round={true} />
                </TelegramShareButton>
            </li>
            {/*facebook*/}
            <li>
                <FacebookShareButton
                    url={urlTo}
                    quote={title}
                    hashtag="#HassanPIOU"
                >
                    <FacebookIcon size={36}  round={true} />
                </FacebookShareButton>
            </li>
            {/*Messenger*/}
            <li>
                <FacebookMessengerShareButton

                >
                    <FacebookMessengerIcon size={36}  round={true} />
                </FacebookMessengerShareButton>
            </li>
            {/*Linkedin*/}
            <li>
                <LinkedinShareButton
                 title={title}
                 url={urlTo}
                >
                    <LinkedinIcon  size={36} round={true} />
                </LinkedinShareButton>
            </li>
            {/*Whatsapp*/}
            <li>
                <WhatsappShareButton
                    title={title}
                    url={urlTo}
                >
                    <WhatsappIcon size={36} round={true} />
                </WhatsappShareButton>
            </li>
            {/*Twitter*/}
            <li>
                <TwitterShareButton
                  hashtags={twitterHashtag}
                  url={urlTo}
                >
                    <TwitterIcon round={true} size={36}  />
                </TwitterShareButton>
            </li>
        </ul>
    )
}

export default ShareButtons