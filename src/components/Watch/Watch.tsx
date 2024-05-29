/* eslint-disable @typescript-eslint/ban-types */
import { Component } from 'react';
import styles from './Watch.module.scss';

class Watch extends Component<{}, { time: string }> {
    timerID: ReturnType<typeof setTimeout> | undefined;

    constructor(props: {}) {
        super(props);
        this.state = {
            time: this.getMoscowTime()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    getMoscowTime() {
        const now = new Date();
        const moscowTime = new Date(
            now.toLocaleString('en-US', { timeZone: 'Europe/Moscow' })
        );
        return moscowTime.toLocaleTimeString('ru-RU', { hour12: false });
    }

    tick() {
        this.setState({
            time: this.getMoscowTime()
        });
    }

    render() {
        return <div className={styles.watch}>{this.state.time}</div>;
    }
}

export default Watch;