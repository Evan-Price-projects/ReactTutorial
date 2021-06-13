import React from 'react';
import SpecialButton from './SpecialButton';
import { Jumbotron, Button } from 'react-bootstrap';
import img from '../img/evan.jpeg'
import '../App.scss'
import { Link } from 'react-router-dom';


class TopBar extends React.Component {
    render() {
        return (
            <Jumbotron className="jumbo">
                <div className="top-style">
                    <img src={img} className="wider" alt="evan" />
                    <ul className='top-link'>
                        <li className="give-space">
                            <Button key="exp" style={{ background: '#f2edd7', color: '#393232', outline: '#f2edd7', border: '#f2edd7' }}>
                                <Link style={{textDecoration: 'none', color: 'inherit'}} to="/3">Experience</Link>
                            </Button>
                        </li>
                        <li className="give-space">
                            <Button key="edu" style={{ background: '#f2edd7', color: '#393232', outline: '#f2edd7', border: '#f2edd7' }}>
                                <Link style={{textDecoration: 'none', color: 'inherit'}} to="/2">Education</Link>
                            </Button>
                        </li>
                        <li className="give-space">
                            <Button key="edu" style={{ background: '#f2edd7', color: '#393232', outline: '#f2edd7', border: '#f2edd7' }}>
                                <Link style={{textDecoration: 'none', color: 'inherit'}} to="/0">Projects</Link>
                            </Button>
                        </li>
                        <li className="give-space">
                            <SpecialButton key="tools" title="Tools/Skills" ddInfo={['Tools', 'Skills']} linkInfo={['/1', '/4']} />
                        </li>
                    </ul>
                </div>
            </Jumbotron>
        )
    }
}
export default TopBar;