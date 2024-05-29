/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import styles from './Review.module.scss';

interface IReview {
    name: any, review: any, date: any
}

const Review: FC<IReview> = ({ name, review, date }) => (
    <div className={styles.review}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.text}>{review}</p>
        <small className={styles.date}>{date}</small>
    </div>
);

export default Review;
