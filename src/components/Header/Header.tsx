/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../assets/logo.webp';
import Watch from '../Watch/Watch';
import styles from './Header.module.scss';

class Header extends Component<any, any> {
    setLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.props.dispatch({
            type: 'SET_LANGUAGE',
            payload: event.target.value
        });
    };

    render() {
        return (
            <header className={styles.header}>
                <img src={logo} alt="Logo" className={styles.logo} />
                <div className={styles.leftSide}>
                    <select onChange={this.setLanguage} value={this.props.language} className={styles.select}>
                        <option value="ru">RU</option>
                        <option value="en">EN</option>
                    </select>
                    <Watch />
                </div>
            </header>
        );
    }
}

const mapStateToProps = (state: any) => ({
    language: state.language
});

export default connect(mapStateToProps)(Header);