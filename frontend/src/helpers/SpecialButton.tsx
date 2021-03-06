import React from 'react'
import { Dropdown } from 'react-bootstrap'
import "../App.scss";
import { Link } from 'react-router-dom';

function SpecialButton(props: { ddInfo: any[]; linkInfo: any[], title: string }) {
    var values = props.ddInfo.map(function (value, i) {
        return (
            <Link key={i} style={{ textDecoration: 'none', color: 'inherit' }} to={props.linkInfo[i]}>
                <Dropdown.Item as='div' key={i}>
                    {value}
                </Dropdown.Item>
            </Link >
        );
    });
    return (
        <Dropdown style={{ background: '#f2edd7', color: '#393232', outline: '#f2edd7', border: '#f2edd7' }}>
            <Dropdown.Toggle style={{ background: '#f2edd7', color: '#393232', outline: '#f2edd7', border: '#f2edd7' }}>
                {props.title}
            </Dropdown.Toggle>
            <Dropdown.Menu as="div">
                {values}
            </Dropdown.Menu>
        </Dropdown>
    )
}
export default SpecialButton;