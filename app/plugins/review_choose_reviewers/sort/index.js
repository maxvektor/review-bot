module.exports = function reviewSortCreator() {
    /**
     * Sorts reviewers by rank.
     *
     * @param {Object} review
     *
     * @returns {Promise}
     */
    return function reviewSort(review) {
        return new Promise(function (resolve) {
            review.team = review.team.sort(function (a, b) {
                if (a.rank > b.rank) return -1;
                if (b.rank > a.rank) return 1;
                return 0;
            });

            resolve(review);
        });
    };
};
