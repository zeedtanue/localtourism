
import {WhatsappShareButton, FacebookShareButton, TwitterShareButton} from 'react-share'
import {WhatsappIcon, FacebookIcon, TwitterIcon} from 'react-share'

const ShareButton = ({url} ) => {
    return (
        <div>
            
            <span> <h6>Share this on</h6></span>
            <span>
            <WhatsappShareButton  url={`https://letsgomy.herokuapp.com${url}`}>
                            <WhatsappIcon size={35} round={true}/>
                        </WhatsappShareButton>
                        <FacebookShareButton    url={`https://letsgomy.herokuapp.com${url}`}>
                            <FacebookIcon size={35} logoFillColor="white" round={true}/>
                        </FacebookShareButton>
                        <TwitterShareButton url={`https://letsgomy.herokuapp.com${url}`}>
                            <TwitterIcon size={35} round={true} />
                        </TwitterShareButton>
                        </span> 
        </div>
    )
}

export default ShareButton
