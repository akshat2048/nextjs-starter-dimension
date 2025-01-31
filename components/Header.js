import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGem from '@fortawesome/fontawesome-free-regular/faGem'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            {/*<span className="icon fa-diamond"></span>*/}
            <FontAwesomeIcon icon={faGem} transform="grow-18" />
        </div>
        <div className="content">
            <div className="inner">
                <h1>Impact Debate</h1>
                <p>The most successful debate camp based out of Wisconsin.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Curriculum</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Schedule</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Our Team</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
                <li><a href="https://forms.gle/3rPG5E11dp4y974y8">Register</a></li>
            </ul>
        </nav>
        
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
