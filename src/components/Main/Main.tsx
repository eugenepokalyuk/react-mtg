/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review';
import styles from './Main.module.scss';

class Main extends Component<any, { currentPage: number }> {
    constructor(props: any) {
        super(props);
        this.state = {
            currentPage: 1
        };
    }

    handlePageChange = (pageNumber: number) => {
        this.setState({ currentPage: pageNumber });
    };

    render() {
        const { language, reviews } = this.props;
        const { currentPage } = this.state;
        const reviewsPerPage = 10;
        const reviewsToShow = Object.values(reviews[language]).slice(
            (currentPage - 1) * reviewsPerPage,
            currentPage * reviewsPerPage
        );

        const totalPages = Math.ceil(Object.keys(reviews[language]).length / reviewsPerPage);

        return (
            <main className={styles.main}>
                <div className={styles.reviews}>
                    {reviewsToShow.map((review: any, index: number) => (
                        <Review key={index} {...review} />
                    ))}
                </div>
                <div className={styles.pagination}>
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => this.handlePageChange(i + 1)}
                            className={`${styles.pageButton} ${i + 1 === currentPage ? styles.active : ''}`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            </main>
        );
    }
}

const mapStateToProps = (state: any) => ({
    language: state.language,
    reviews: state.reviews
});

export default connect(mapStateToProps)(Main);